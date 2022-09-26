import { NavBar } from './components/NavBar'
import { StartSite } from './components/StartSite'
import GlobalStyles from './GlobalStyles'

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<NavBar />
			<StartSite />
		</div>
	)
}

export default App
