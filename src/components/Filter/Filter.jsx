import './Filter.css'

export default function Filter({ isActive, setFilter, moviesLoaded }) {
	const handleFilterChange = filterValue => {
		if (isActive === filterValue) {
			setFilter('')
		} else {
			setFilter(filterValue)
		}
	}

	return (
		<div className='filter-block'>
			<button
				className={`filter-button ${isActive === 'Rating' ? 'active' : ''}`}
				onClick={() => handleFilterChange('Rating')}
				disabled={!moviesLoaded}
			>
				RATING
			</button>
			<button
				className={`filter-button ${isActive === 'Year' ? 'active' : ''}`}
				onClick={() => handleFilterChange('Year')}
				disabled={!moviesLoaded}
			>
				YEAR
			</button>
		</div>
	)
}
