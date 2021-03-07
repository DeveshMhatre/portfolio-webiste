import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import Layout from '../layouts/layout'

import Socials from '../components/socials'

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    gsap.to(aboutRef.current, {
      y: -10,
      opacity: 1,
      duration: 0.5,
      delay: 1,
    })
  }, [])

  return (
    <Layout>
      <article ref={aboutRef} className="main about">
        <section className="about__info">
          <h1 className="about__info--heading">My name is Devesh</h1>
          <h3 className="about__info--subheading">
            I am a Front-End Web Developer
          </h3>
          <button className="btn btn--rounded about__info--cta">
            My Resume
          </button>
        </section>
        <section className="about__socials">
          <h3 className="about__socials--heading">Connect with me</h3>
          <Socials />
        </section>
      </article>
    </Layout>
  )
}

export default About
