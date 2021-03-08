import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { gsap } from 'gsap'

import Layout from '../layouts/layout'

import MessageSent from '../assets/message-sent.svg'

const ThankYou = () => {
  const thankRef = useRef(null)
  const thankImgRef = useRef(null)

  useEffect(() => {
    gsap.to(thankRef.current, {
      opacity: 1,
      duration: 0,
      delay: 0.5,
    })

    gsap.to(thankImgRef.current, {
      y: 0,
      duration: 2,
      delay: 1.5,
      ease: 'bounce.out',
    })

    gsap.to(thankImgRef.current, {
      opacity: 1,
      duration: 0.5,
      delay: 1.5,
    })
  })
  return (
    <Layout>
      <article ref={thankRef} className="main info-page">
        <h3 className="info-page__heading">Thank you for getting in touch!</h3>
        <p className="info-page__message">
          Your message has been successfully sent! I will contact you soon!
        </p>
        <Link to="/contact" className="btn btn--rounded info-page__link">
          Go back
        </Link>
        <div ref={thankImgRef} className="info-page__msg">
          <MessageSent />
        </div>
      </article>
    </Layout>
  )
}
export default ThankYou
