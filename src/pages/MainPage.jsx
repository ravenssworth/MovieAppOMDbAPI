import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import MovieList from '../components/MovieList/MovieList'
import MovieListHeading from '../components/MovieListHeading/MovieListHeading'
import SearchBox from '../components/SearchBox/SearchBox'
import Filter from '../components/Filter/Filter'
import useMovies from '../hooks/useMovies'
import useSortedMovies from '../hooks/useSortedMovies'
import Loading from '../components/Loading/Loading'
import './MainPage.css'

export default function MainPage() {
	const [searchValue, setSearchValue] = useState('')
	const [filter, setFilter] = useState('')
	const [loading, setLoading] = useState(false)
	const location = useLocation()

	useEffect(() => {
		const params = new URLSearchParams(location.search)
		const search = params.get('search')
		if (search) {
			setSearchValue(search)
		}
	}, [location.search])

	const [movies] = useMovies(searchValue, setLoading)
	const sortedMovies = useSortedMovies(movies, filter)

	return (
		<div className='main-page'>
			<header className='search-block'>
				<MovieListHeading />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				<Filter isActive={filter} setFilter={setFilter} />
			</header>
			{loading ? (
				<Loading />
			) : (
				<MovieList movies={sortedMovies} searchValue={searchValue} />
			)}
		</div>
	)
}
