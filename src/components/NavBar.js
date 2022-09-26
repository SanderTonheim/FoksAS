import { NavbarStyled } from '../styled/NavBar.styled'
import { ReactComponent as Logo } from '../assets/Logo.svg'
export const NavBar = () => {
	return (
		<NavbarStyled className='NavBar'>
			<ul>
				<li>Foks AS</li>
				<li>
					<Logo />
				</li>
			</ul>
		</NavbarStyled>
	)
}
