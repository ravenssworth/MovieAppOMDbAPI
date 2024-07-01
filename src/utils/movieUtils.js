import noPoster from '../assets/no-poster.jpg'
export function getPoster(poster) {
	return poster !== 'N/A' ? poster : noPoster
}

export function displayMessageIfNA(value) {
	return value !== 'N/A' ? value : ''
}
