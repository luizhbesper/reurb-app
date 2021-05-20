import Head from "next/head";
import GlobalStyle from '../styles/globalStyle';
import { ThemeProvider } from 'styled-components'
import Container from '../styles/app.style' 
import Navbar from "../Components/App/Navbar";
import Toolbar from '../Components/App/Toolbar'

const theme = {
  colors: {
    primary: '#049DD9',
    secondary: '#FF4F5A',
    light: '#e2e2e2',
    dark: '#333333'
  }
}

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"crossOrigin="anonymous"></script>
      </Head>
      <Container>
          <Navbar />
          <div className = "view">
            <Toolbar />
            <Component {...pageProps} />
          </div>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
