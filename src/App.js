import { Routes, Route } from 'react-router-dom'
import { StartSite } from './components/StartSite'
import { NavBar } from './components/NavBar'
import { VelgFagSite } from './components/VelgFagSite'
import GlobalStyles from './GlobalStyles'

function App() {
	// const navigateHome = () => {
	// 	//  navigate to /
	// 	navigate('/')
	// }
	return (
		<div>
			<NavBar />
			<Routes>
				<Route
					path='/src/components/VelgFagSite.js'
					element={<VelgFagSite />}
				/>
				<Route path='/' element={<StartSite />} />
			</Routes>
		</div>
	)
}

export default App
