import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header.js'

const Layout = ({ children }) => {
  return (
    <main className="dark">
      <Header />
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
