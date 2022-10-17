import styled from 'styled-components'
import BG from '../assets/StartSiteBG.png'

export const Background = styled.div`
	height: 100%;
	width: 100%;
`

export const StartSiteContainer = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	font-size: 1.2rem;
	background-size: cover;
	background-image: url(${BG});
`

export const StartHeader = styled.div`
	width: 100%;
	height: auto;
	padding: 2rem;
	margin-bottom: 3rem;
	font-size: 1.4rem;
	h1 {
		font-weight: 500;
	}
`

export const ButtonDiv = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;

	button {
		width: 60%;
		margin: 0 auto;
		height: 3em;
		font-size: 1.1rem;
		border-radius: 1rem;
	}
`
export const BackgroundImg = styled.img`
	height: 100%;
	width: 100%;
	background-image: url();
`
