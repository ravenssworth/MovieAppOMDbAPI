import { useState, useEffect } from 'react'
import MovieList from './components/MovieList/MovieList'
import './App.css'
import MovieListHeading from './components/MovieListHeading/MovieListHeading'
import SearchBox from './components/SearchBox/SearchBox'
import Filter from './components/Filter/Filter'

export default function App() {
	const [movies, setMovies] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [filter, setFilter] = useState('')

	const getMovieRequest = async () => {
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
	}

	useEffect(() => {
		if (searchValue) {
			getMovieRequest()
		}
	}, [searchValue])

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

	return (
		<div className='container-fluid movie-app'>
			<MovieListHeading />
			<Filter isActive={filter} setFilter={setFilter} />
			<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			<MovieList movies={sortMovies(movies, filter)} />
		</div>
	)
}
