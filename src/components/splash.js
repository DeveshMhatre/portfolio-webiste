import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import SiteLogo from './site-logo'

const Splash = () => {
  const splash = useRef(null)
  const progressBar = useRef(null)
  const progress = useRef(null)

  useEffect(() => {
    gsap.to(progress.current, {
      width: '100%',
      duration: 0.5,
      ease: 'power3.out',
    })
    gsap.to(progressBar.current, {
      opacity: 0,
      y: -5,
      duration: 0.5,
      delay: 0.5,
    })
    gsap.to(splash.current, {
      display: 'none',
      opacity: 0,
      duration: 0.5,
      delay: 1,
    })
  }, [])

  return (
    <section ref={splash} className="splash">
      <div className="splash__content">
        <SiteLogo />
        <div ref={progressBar} className="splash__content--loader">
          <div ref={progress} className="progress"></div>
        </div>
      </div>
    </section>
  )
}

export default Splash
