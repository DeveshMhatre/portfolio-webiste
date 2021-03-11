import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

import SiteLogo from '../components/site-logo'

import Close from '../assets/close.svg'

const Header = () => {
  const { pathname } = useLocation()

  return (
    <header className="head">
      <nav className="head__nav">
        <SiteLogo />
        {pathname === '/' ? (
          <Link
            to="/"
            activeStyle={{
              textDecoration: 'line-through var(--accent)',
              cursor: 'default',
            }}
            className="head__nav--link"
          >
            Portfolio
          </Link>
        ) : (
          <Link
            to="/"
            title="Home"
            className="head__nav--close"
            aria-label="Back to Home"
          >
            <Close />
          </Link>
        )}
        <Link
          to="/about"
          activeStyle={{
            textDecoration: 'line-through var(--accent)',
            cursor: 'default',
          }}
          className="head__nav--link"
        >
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header
