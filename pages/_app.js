import '../styles/globals.css'
import '@thot/components/styles/styles.css'
import PropTypes from 'prop-types'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.any,
}

export default MyApp
