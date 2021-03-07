import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import SiteLogo from './site-logo'

const Splash = () => {
  const splashRef = useRef(null)
  const progressBarRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    gsap.to(progressRef.current, {
      width: '100%',
      duration: 0.5,
      ease: 'power3.out',
    })
    gsap.to(progressBarRef.current, {
      opacity: 0,
      y: -5,
      duration: 0.5,
      delay: 0.5,
    })
    gsap.to(splashRef.current, {
      display: 'none',
      opacity: 0,
      duration: 0.5,
      delay: 1,
    })
  }, [])

  return (
    <section ref={splashRef} className="splash">
      <div className="splash__content">
        <SiteLogo />
        <div ref={progressBarRef} className="splash__content--loader">
          <div ref={progressRef} className="progress"></div>
        </div>
      </div>
    </section>
  )
}

export default Splash
