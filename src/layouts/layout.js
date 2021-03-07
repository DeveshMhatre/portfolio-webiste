import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Splash from '../components/splash'

const Layout = ({ children }) => {
  return (
    <main className="dark">
      <Helmet>
        <title>Portfolio | Devesh Mhatre</title>
      </Helmet>
      <Header />
      <Splash />
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
