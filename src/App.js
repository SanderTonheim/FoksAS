import { Routes, Route } from 'react-router-dom'

import { StartSite } from './pages/StartSite'
import { NavBar } from './components/NavBar'
import { VelgFagSite } from './pages/VelgFagSite'
import GlobalStyles from './GlobalStyles'

function App() {
	return (
		<>
			<GlobalStyles />
			<NavBar />
			<Routes>
				<Route path='/FoksAS' element={<StartSite />} />
				<Route path='/VelgFag' element={<VelgFagSite />} />
			</Routes>
		</>
	)
}

export default App
