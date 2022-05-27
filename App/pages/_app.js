import '../styles/globals.css'
import { AppProvider } from '../context'
import { AnimatePresence } from 'framer-motion'
function MyApp({ Component, pageProps }) {

  return <AppProvider>
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}>
      <Component  {...pageProps} />
    </AnimatePresence>
  </AppProvider>
}

export default MyApp
