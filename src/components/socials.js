import React from 'react'

import SocialLink from './social-link'

import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'
import Codepen from '../assets/codepen.svg'
import Email from '../assets/email.svg'

const Socials = () => {
  const githubLink = 'https://github.com/DeveshMhatre'
  const linkedinLink = 'https://linkedin.com/in/devesh-mhatre-a74192135'
  const codepenLink = 'https://codepen.io/cryptomaniac'
  const emailId = 'deveshmhtr.mhatre92@gmail.com'

  const copyToClipboard = (e) => {
    e.preventDefault()

    // Copy email to clipboard
    navigator.clipboard.writeText(emailId)
  }

  return (
    <div className="socials">
      <SocialLink name="Github" link={githubLink}>
        <Github />
      </SocialLink>
      <SocialLink name="Linkedin" link={linkedinLink}>
        <Linkedin />
      </SocialLink>
      <SocialLink name="Codepen" link={codepenLink}>
        <Codepen />
      </SocialLink>
      <button
        className="btn btn--icon"
        onClick={copyToClipboard}
        aria-label="Get my email address"
      >
        <Email />
      </button>
    </div>
  )
}

export default Socials
