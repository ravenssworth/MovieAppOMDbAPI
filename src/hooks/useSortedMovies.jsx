const useSortedMovies = (movies, filter) => {
	const sortMovies = (movies, filter) => {
		if (filter === 'Rating') {
			return movies.slice().sort((a, b) => {
				const ratingA = a.Ratings?.find(
					rating => rating.Source === 'Metacritic'
				)?.Value
				const ratingB = b.Ratings?.find(
					rating => rating.Source === 'Metacritic'
				)?.Value
				const numericRatingA = ratingA ? parseInt(ratingA.split('/')[0]) : 0
				const numericRatingB = ratingB ? parseInt(ratingB.split('/')[0]) : 0
				return numericRatingB - numericRatingA
			})
		} else if (filter === 'Year') {
			return movies.slice().sort((a, b) => parseInt(b.Year) - parseInt(a.Year))
		}
		return movies
	}

	return sortMovies(movies, filter)
}

export default useSortedMovies
