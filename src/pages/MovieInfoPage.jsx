import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './MovieInfoPage.css'
import Button from '../components/Button/Button'
import useMovieDetails from '../hooks/useMovieDetails.jsx'
import Loading from '../components/Loading/Loading'
import { getColorByRating } from '../utils/ratingColors.js'
import { getPoster, displayMessageIfNA } from '../utils/movieUtils'

function MovieInfoPage() {
	const location = useLocation()
	const navigate = useNavigate()
	const { movie, searchValue } = location.state || {}
	const [movieDetails, loading] = useMovieDetails(movie?.Title)

	const handleBackClick = () => {
		navigate(`/?search=${encodeURIComponent(searchValue)}`)
	}

	if (loading) {
		return <Loading />
	}

	if (!movieDetails) {
		return (
			<div className='loading'>
				<h2>No movie data available</h2>
			</div>
		)
	}

	return (
		<div className='movie-info__block'>
			<div className='movie-info'>
				<div className='movie-info__b1'>
					{movieDetails.Poster ? (
						<img
							className='movie-info__poster'
							src={getPoster(movieDetails.Poster)}
							alt={movieDetails.Title}
						/>
					) : (
						<div>No Poster Available</div>
					)}
					<div className='movie-info__content'>
						<div className='movie-info__header'>
							<h2 className='movie-info__title'>
								{displayMessageIfNA(movieDetails.Title)}
							</h2>
							<p className='movie-info__year'>
								{displayMessageIfNA(movieDetails.Year)}
							</p>
						</div>
						<p className='movie-info__runtime'>
							<span>Runtime:</span> {displayMessageIfNA(movieDetails.Runtime)}
						</p>
						<p className='movie-info__writer'>
							<span>Writer:</span> {displayMessageIfNA(movieDetails.Writer)}
						</p>
						<p className='movie-info__actors'>
							<span>Actors: </span>
							{displayMessageIfNA(movieDetails.Actors)}
						</p>
						<p className='movie-info__genre'>
							<span>Genre: </span>
							{displayMessageIfNA(movieDetails.Genre)}
						</p>
						<div className='movie-info__ratings'>
							{movieDetails.Ratings?.map((rating, index) => (
								<p key={index} className='movie-info__rating'>
									<span>{rating.Source}: </span>
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
				</div>
				<div className='movie_info__b2'>
					<p className='movie-info__plot'>
						{displayMessageIfNA(movieDetails.Plot)}
					</p>
				</div>
				<Button onClick={handleBackClick} />
			</div>
		</div>
	)
}

export default MovieInfoPage
