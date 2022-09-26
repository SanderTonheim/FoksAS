import GlobalStyles from '../GlobalStyles'
import {
	StartSiteContainer,
	StartHeader,
	ButtonDiv,
} from '../styled/StartSite.styled'

export const StartSite = () => {
	return (
		<StartSiteContainer>
			<GlobalStyles />
			<StartHeader>
				<h1>Regn ut din oppmøteprosent</h1>
			</StartHeader>
			<ButtonDiv>
				<button>Velg Fag</button>
				<button>Skriv inn </button>
			</ButtonDiv>
		</StartSiteContainer>
	)
}
