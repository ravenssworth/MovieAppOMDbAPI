import { useState, useEffect } from 'react'
import MovieList from './components/MovieList/MovieList'
import './App.css'
import MovieListHeading from './components/MovieListHeading/MovieListHeading'
import SearchBox from './components/SearchBox/SearchBox'

export default function App() {
	const [movies, setMovies] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ed1c2b51`
		const response = await fetch(url)
		const responseJson = await response.json()
		if (responseJson.Search) {
			setMovies(responseJson.Search)
		}
	}

	useEffect(() => {
		getMovieRequest(searchValue)
	}, [searchValue])
	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	)
}
