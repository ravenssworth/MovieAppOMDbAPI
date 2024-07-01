import { useState, useEffect } from 'react'

const useMovies = (searchValue, setLoading) => {
	const [movies, setMovies] = useState([])

	const getMovieRequest = async () => {
		setLoading(true)
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ed1c2b51`
		const response = await fetch(url)
		const responseJson = await response.json()
		if (responseJson.Search) {
			const movieDetailsPromises = responseJson.Search.map(async movie => {
				const urlDetails = `http://www.omdbapi.com/?t=${movie.Title}&apikey=ed1c2b51&plot=short`
				const response = await fetch(urlDetails)
				const movieDetails = await response.json()
				return {
					...movie,
					Plot: movieDetails.Plot,
					Ratings: movieDetails.Ratings,
					Year: movieDetails.Year,
				}
			})
			const moviesWithDetails = await Promise.all(movieDetailsPromises)
			setMovies(moviesWithDetails)
		}
		setLoading(false)
	}

	useEffect(() => {
		if (searchValue) {
			getMovieRequest()
		}
	}, [searchValue])

	return [movies, setMovies]
}

export default useMovies
