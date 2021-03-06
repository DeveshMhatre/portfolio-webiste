import React from 'react'
import { Link } from 'gatsby'

import Logo from '../assets/logo.svg'
import Close from '../assets/close.svg'

const Header = () => {
  return (
    <header className="head">
      <nav className="head__nav">
        <Link to="/" className="head__nav--logo" aria-label="Home">
          <Logo />
        </Link>
        {location.pathname === '/' ? (
          <Link
            to="/"
            activeStyle={{ textDecoration: 'line-through' }}
            className="head__nav--link"
          >
            Portfolio
          </Link>
        ) : (
          <Link to="/" className="head__nav--close" aria-label="Back to Home">
            <Close />
          </Link>
        )}
        <Link
          to="/about"
          activeStyle={{ textDecoration: 'line-through' }}
          className="head__nav--link"
        >
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header
