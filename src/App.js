import { Routes, Route } from 'react-router-dom'
import { StartSite } from './components/StartSite'
import { NavBar } from './components/NavBar'
import { VelgFagSite } from './pages/VelgFagSite'
import GlobalStyles from './GlobalStyles'

function App() {
	return (
		<div>
			<GlobalStyles />
			<NavBar />
			<Routes>
				<Route path='/' element={<StartSite />} />
				<Route path='/src/pages/VelgFagSite.js' element={<VelgFagSite />} />
			</Routes>
		</div>
	)
}

export default App
