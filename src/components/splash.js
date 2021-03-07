import React from 'react'

import SiteLogo from './site-logo'

const Splash = () => {
  gsap.to('.progress', { width: '100%', duration: 1 })

  return (
    <section className="splash">
      <div className="splash__content">
        <SiteLogo />
        <div className="splash__content--loader">
          <div className="progress"></div>
        </div>
      </div>
    </section>
  )
}

export default Splash
