import GlobalStyles from '../GlobalStyles'
import {
	StartSiteContainer,
	StartHeader,
	ButtonDiv,
	BackgroundImg,
} from '../styled/StartSite.styled'

export const StartSite = () => {
	return (
		<>
			<GlobalStyles />
			<BackgroundImg>
				<StartSiteContainer>
					<StartHeader>
						<h1>Regn ut din oppmøteprosent</h1>
					</StartHeader>
					<ButtonDiv>
						<button>Velg Fag</button>
						<button>Skriv inn </button>
					</ButtonDiv>
				</StartSiteContainer>
			</BackgroundImg>
		</>
	)
}
