import GlobalStyles from '../GlobalStyles'
import { FagListe, FagListeElementer } from '../styled/FagListe.styled'
import { HeaderOne } from '../styled/VelgFagSite.styled'

export const VelgFagSite = () => {
	return (
		<div>
			<GlobalStyles />
			<HeaderOne>Velg dine fag</HeaderOne>

			<FagListe>
				<label htmlFor=""></label>
				<input type='checkbox' name='' id='' />
			</FagListe>
		</div>
	)
}
