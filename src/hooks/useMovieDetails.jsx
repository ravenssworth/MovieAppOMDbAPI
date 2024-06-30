import { useState, useEffect } from 'react'

const useMovieDetails = title => {
	const [movieDetails, setMovieDetails] = useState(null)
	const [loading, setLoading] = useState(false)

	const getMovieDetails = async title => {
		setLoading(true)
		const url = `http://www.omdbapi.com/?t=${title}&apikey=ed1c2b51&plot=full`
		const response = await fetch(url)
		const responseJson = await response.json()
		if (responseJson) {
			setMovieDetails(responseJson)
		}
		setLoading(false)
	}

	useEffect(() => {
		if (title) {
			getMovieDetails(title)
		}
	}, [title])

	return [movieDetails, loading]
}

export default useMovieDetails
