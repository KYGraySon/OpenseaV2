import { ChainId, ThirdwebProvider} from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
  <ThirdwebProvider desiredChainId={ChainId.Goerli} chainRpc={{
    [ChainId.Goerli]:'https://goerli.infura.io/v3/5f99e67e739f43959d0520ab9d8a4085'}}>
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
  </ThirdwebProvider>
  )
}

export default MyApp
