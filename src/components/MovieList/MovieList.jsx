const MovieList = props => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='d-flex justify-content-center m-3'>
					<img src={movie.Poster} />
				</div>
			))}
		</>
	)
}
export default MovieList
