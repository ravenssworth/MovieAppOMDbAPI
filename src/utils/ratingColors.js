export function getColorByRating(ratingValue, source) {
	if (source === 'Internet Movie Database') {
		const value = parseFloat(ratingValue.split('/')[0]) * 10
		if (value >= 80) return 'green'
		if (value >= 60) return 'orange'
		return 'red'
	}
	if (source === 'Rotten Tomatoes') {
		const value = parseInt(ratingValue.replace('%', ''), 10)
		if (value >= 80) return 'green'
		if (value >= 60) return 'orange'
		return 'red'
	}
	if (source === 'Metacritic') {
		const value = parseInt(ratingValue.split('/')[0], 10)
		if (value >= 80) return 'green'
		if (value >= 60) return 'orange'
		return 'red'
	}
	return 'black'
}
