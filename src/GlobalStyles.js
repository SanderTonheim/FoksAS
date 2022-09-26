import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`

  * {
    margin: 0rem;
    padding: 0rem;    
  }
  
  html, body {
    max-width: 100%;
    height: 100%;
    overflow-x: hidden;
}
  
  .NavBar ul {
    width: 100%;
    height: 3rem;
    background-color: #333;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
  }

  .NavBar li {
      display: flex;
      height: 100%;
      align-items: center;
      margin: 0 2rem;
    }

`

export default GlobalStyles
