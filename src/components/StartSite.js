import GlobalStyles from '../GlobalStyles'
import { useNavigate } from 'react-router-dom'
import {
	StartSiteContainer,
	StartHeader,
	ButtonDiv
} from '../styled/StartSite.styled'
export const StartSite = () => {
	const navigate = useNavigate(1)
	const navigationToVelgFagSite = () => {
		navigate('/src/pages/VelgFagSite.js')
	}
	const navigationToManuelt = () => {
		navigate('/src/pages/SkrivInnManuelt.js')
	}
	return (
		<StartSiteContainer>
			<GlobalStyles />
			<StartHeader>
				<h1>
					Regn ut din oppmøte <br /> prosent
				</h1>
			</StartHeader>
			<ButtonDiv>
				<button onClick={navigationToVelgFagSite}>Velg fag </button>
				<button onClick={navigationToManuelt}>Skriv inn manuelt </button>
			</ButtonDiv>
		</StartSiteContainer>
	)
}
