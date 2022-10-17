import styled from 'styled-components'
import BG from '../assets/StartSiteBG.png'

export const StartSiteContainer = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	font-size: 1.2rem;
	background-size: cover;
	background-image: url(${BG});
`

export const StartHeader = styled.div`
	width: 90vw;
	height: 100%;
	padding: 2rem;
	margin-bottom: 3rem;
	font-size: 1.4rem;
	h1 {
		font: 600 3.9rem sans-serif;
	}
`

export const ButtonDiv = styled.div`
	margin-top: rem;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 4rem;

	button {
		width: 80%;
		height: 3em;
		margin: 0 auto;
		padding: 0%;
		border-radius: 1rem;
		border: none;
		background-color: white;
		font: 600 1.5rem sans-serif;
	}
`
