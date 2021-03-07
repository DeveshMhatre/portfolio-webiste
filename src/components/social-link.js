import React from 'react'
import PropTypes from 'prop-types'

const SocialLink = ({ name, link, children }) => (
  <a
    href={link}
    className="social-link"
    target="_blank"
    rel="noreferrer"
    aria-label={name}
  >
    {children}
  </a>
)

SocialLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SocialLink
