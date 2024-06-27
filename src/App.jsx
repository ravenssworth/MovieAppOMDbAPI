import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage.jsx'
import MovieInfoPage from './pages/MovieInfoPage.jsx'

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/movieinfo/:id' element={<MovieInfoPage />} />
			</Routes>
		</>
	)
}
