import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { StartSite } from './pages/StartSite'
import { NavBar } from './components/NavBar'
import { VelgFagSite } from './pages/VelgFagSite'
import { SkrivInnManuelt } from './pages/SkrivInnManuelt'

import GlobalStyles from './GlobalStyles'

function App() {
	return (
		<>
			<NavBar />
			<Router basename={process.env.PUBLIC_URL}>
				<GlobalStyles />
				<Routes>
					<Route exact path='/' element={<StartSite />}></Route>
					<Route exact path='/VelgFag' element={<VelgFagSite />}></Route>
					<Route
						exact
						path='/SkrivInnManuelt'
						element={<SkrivInnManuelt />}
					></Route>
				</Routes>
			</Router>
		</>
	)
}

export default App
