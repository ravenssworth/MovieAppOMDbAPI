import './MovieList.css'

const MovieList = props => {
	return (
		<div className='movies'>
			{props.movies.map((movie, index) => (
				<div className='movie' key={index}>
					<img
						className='movie-poster'
						src={movie.Poster}
						alt={`Poster of ${movie.Title}`}
					/>
					<p className='movie-title'>{movie.Title}</p>
					<p className='movie-year'>{movie.Year}</p>
					<p className='movie-plot'>{movie.Plot}</p>
					<div className='movie-ratings'>
						{movie.Ratings &&
							movie.Ratings.filter(
								rating => rating.Source === 'Metacritic'
							).map((rating, index) => (
								<p key={index} className='movie-rating'>
									{rating.Source}: {rating.Value}
								</p>
							))}
					</div>
				</div>
			))}
		</div>
	)
}

export default MovieList
