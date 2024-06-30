import React from 'react'
import './SearchBox.css'

export default function SearchBox(props) {
	return (
		<div className='search-box'>
			<input
				value={props.searchValue}
				onChange={e => props.setSearchValue(e.target.value)}
				type='text'
				required='required'
			/>
			<span className='search-movie'>Search for a Movie</span>
		</div>
	)
}
