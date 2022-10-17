import GlobalStyles from '../GlobalStyles'
import { FagListe, FagListeElementer } from '../styled/FagListe.styled'
import { HeaderOne } from '../styled/VelgFagSite.styled'

export const VelgFagSite = () => {
	return (
		<>
			<GlobalStyles />
			<HeaderOne>Velg dine fag</HeaderOne>
			<h1>test test</h1>
			<FagListe>
				<label htmlFor=''></label>
				<input type='checkbox' name='' id='' />
			</FagListe>
		</>
	)
}
