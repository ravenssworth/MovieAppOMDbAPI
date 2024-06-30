import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './MovieInfoPage.css'
import Button from '../components/Button/Button'
import useMovieDetails from '../hooks/useMovieDetails.jsx'

function MovieInfoPage() {
	const location = useLocation()
	const navigate = useNavigate()
	const { movie, searchValue } = location.state || {}
	const [movieDetails, loading] = useMovieDetails(movie?.Title)

	const handleBackClick = () => {
		navigate(`/?search=${encodeURIComponent(searchValue)}`)
	}

	if (loading) {
		return <h2>Loading movie data...</h2>
	}

	if (!movieDetails) {
		return <h2>No movie data available</h2>
	}

	return (
		<div className='movie-info__block'>
			<div className='movie-info'>
				{movieDetails.Poster ? (
					<img
						className='movie-info__poster'
						src={movieDetails.Poster}
						alt={movieDetails.Title}
					/>
				) : (
					<div>No Poster Available</div>
				)}
				<div className='movie-info__content'>
					<div className='movie-info__header'>
						<h2 className='movie-info__title'>{movieDetails.Title}</h2>
						<p className='movie-info__year'>{movieDetails.Year}</p>
					</div>
					<p className='movie-info__plot'>{movieDetails.Plot}</p>
					<p className='movie-info__runtime'>Runtime: {movieDetails.Runtime}</p>
					<p className='movie-info__writer'>Writer: {movieDetails.Writer}</p>
					<p className='movie-info__actors'>Actors: {movieDetails.Actors}</p>
				</div>
				<div className='movie-info__ratings'>
					{movieDetails.Ratings?.map((rating, index) => (
						<p key={index} className='movie-info__rating'>
							{rating.Source}: {rating.Value}
						</p>
					))}
				</div>
				<Button onClick={handleBackClick} />
			</div>
		</div>
	)
}

export default MovieInfoPage
