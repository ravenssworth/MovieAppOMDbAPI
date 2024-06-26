import './SearchBox.css'
export default function SearchBox(props) {
	return (
		<div className='search-box'>
			<input
				value={props.value}
				onChange={e => props.setSearchValue(e.target.value)}
				type='text'
				required='required'
			/>
			<span className='search-movie'>Enter movie name</span>
		</div>
	)
}
