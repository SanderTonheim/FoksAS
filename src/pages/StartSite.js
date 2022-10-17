import GlobalStyles from '../GlobalStyles'
import { Link } from 'react-router-dom'

import {
	StartSiteContainer,
	StartHeader,
	ButtonDiv
} from '../styled/StartSite.styled'
export const StartSite = () => {
	return (
		<StartSiteContainer>
			<GlobalStyles />
			<StartHeader>
				<h1>
					Regn ut din oppmøte <br /> prosent
				</h1>
			</StartHeader>
			<ButtonDiv>
				<button>
					<Link to={'/VelgFag'}>Velg fag</Link>
				</button>
				<button>
					<Link to={'/SkrivInnManuelt'}>Skriv inn manuelt</Link>
				</button>
			</ButtonDiv>
		</StartSiteContainer>
	)
}
