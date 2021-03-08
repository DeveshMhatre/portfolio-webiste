import { navigate } from 'gatsby'

import './src/styles/index.scss'

// Prevent navigating to these pages unless redirected
export const onInitialClientRender = () => {
  if (
    window.location.pathname.startsWith('/thankyou') ||
    window.location.pathname.startsWith('/404') ||
    window.location.pathname.startsWith('/seo')
  ) {
    navigate('/')
  }
}
