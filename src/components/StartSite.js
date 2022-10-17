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
		navigate('/src/components/VelgFagSite.js')
	}
	return (
		<StartSiteContainer>
			<GlobalStyles />
			<StartHeader>
				<h1>Regn ut din oppmøteprosent</h1>
			</StartHeader>
			<ButtonDiv>
				<button>button </button>
				<button onClick={navigationToVelgFagSite}>Skriv inn </button>
			</ButtonDiv>
		</StartSiteContainer>
	)
}
