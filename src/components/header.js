import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { gsap } from 'gsap'

import SiteLogo from '../components/site-logo'

import Close from '../assets/close.svg'

const Header = () => {
  const { pathname } = useLocation()

  const headerRef = useRef(null)

  useEffect(() => {
    gsap.to(headerRef.current, {
      opacity: 1,
      duration: 0,
      delay: 0.5,
    })
  })

  return (
    <header ref={headerRef} className="head">
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
