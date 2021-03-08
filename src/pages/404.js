import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { gsap } from 'gsap'

import Layout from '../layouts/layout'

import FourOhFour from '../assets/four-oh-four.svg'

const PageNotFound = () => {
  const fourRef = useRef(null)
  const fourImgRef = useRef(null)

  useEffect(() => {
    gsap.to(fourRef.current, {
      opacity: 1,
      duration: 0,
      delay: 0.5,
    })

    gsap.to(fourImgRef.current, {
      x: 0,
      duration: 2,
      delay: 1.5,
      ease: 'bounce.out',
    })

    gsap.to(fourImgRef.current, {
      opacity: 1,
      duration: 0.5,
      delay: 1.5,
    })
  })

  return (
    <Layout>
      <article ref={fourRef} className="main info-page">
        <h3 className="info-page__heading">
          Could not find the page you are looking for&hellip;
        </h3>
        <Link to="/" className="btn btn--rounded info-page__link">
          Back to Home
        </Link>
        <div ref={fourImgRef} className="info-page__four-oh-four">
          <FourOhFour />
        </div>
      </article>
    </Layout>
  )
}

export default PageNotFound
