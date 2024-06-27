import React from 'react'
import { useLocation } from 'react-router-dom'

function MovieInfoPage(props) {
	const location = useLocation()
	const { movie } = location.state || { movie: null }

	if (!movie) {
		return <h2>No movie data available</h2>
	}
	return (
		<div>
			<h2>{movie.Title}</h2>
			<p>{movie.Plot}</p>
			<img src={movie.Poster} alt={movie.Title} />
			<p>{movie.Year}</p>
			<div>
				{movie.Ratings?.map((rating, index) => (
					<p key={index}>
						{rating.Source}: {rating.Value}
					</p>
				))}
			</div>
		</div>
	)
}

export default MovieInfoPage
