import React from 'react'
import './Button.css'

function Button({ onClick }) {
	return (
		<div className='movie-info__button-container'>
			<button type='button' className='movie-info_button' onClick={onClick}>
				<p>Back</p>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth='4'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M14 5l7 7m0 0l-7 7m7-7H3'
					></path>
				</svg>
			</button>
		</div>
	)
}

export default Button
