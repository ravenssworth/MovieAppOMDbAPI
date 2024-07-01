import './MovieList.css'
import { useNavigate } from 'react-router-dom'
import { getColorByRating } from '../../utils/ratingColors.js'
const MovieList = props => {
	const navigate = useNavigate()

	const handleMovieClick = movie => {
		navigate(`/movieinfo/${movie.imdbID}`, {
			state: { movie, searchValue: props.searchValue },
		})
	}

	return (
		<div className='movies'>
			{props.movies.map((movie, index) => (
				<div
					className='movie'
					key={index}
					onClick={() => handleMovieClick(movie)}
				>
					<img
						className='movie-poster'
						src={movie.Poster}
						alt={`Poster of ${movie.Title}`}
					/>
					<div className='movie-details'>
						<p className='movie-title'>{movie.Title}</p>
						<p className='movie-plot'>{movie.Plot}</p>
						<div className='movie-ratings'>
							{movie.Ratings &&
								movie.Ratings.filter(
									rating => rating.Source === 'Metacritic'
								).map((rating, index) => (
									<p key={index} className='movie-rating'>
										{rating.Source}:{' '}
										<span
											style={{
												color: getColorByRating(rating.Value, rating.Source),
											}}
										>
											{rating.Value}
										</span>
									</p>
								))}
						</div>
					</div>
					<p className='movie-year'>{movie.Year}</p>
				</div>
			))}
		</div>
	)
}

export default MovieList
