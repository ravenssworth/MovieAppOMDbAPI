import './Filter.css'
export default function Filter({ isActive, setFilter }) {
	return (
		<div className='filter-block'>
			<input
				type='radio'
				id='Rating'
				name='filter'
				onChange={() => setFilter('Rating')}
			/>
			<input
				type='radio'
				id='Year'
				name='filter'
				onChange={() => setFilter('Year')}
			/>
			<ol className='filters'>
				<li>
					<label
						className={isActive === 'Rating' ? 'active' : ''}
						htmlFor='Rating'
					>
						RATING
					</label>
				</li>
				<li>
					<label
						className={isActive === 'Year ' ? 'active' : ''}
						htmlFor='Year'
					>
						YEAR
					</label>
				</li>
			</ol>
		</div>
	)
}
