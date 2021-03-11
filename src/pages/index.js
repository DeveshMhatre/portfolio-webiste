import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { gsap } from 'gsap'

import SEO from './seo'

import Layout from '../layouts/layout'
import Carousel from '../components/carousel'

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const homeRef = useRef(null)

  useEffect(() => {
    gsap.to(homeRef.current, {
      opacity: 1,
      duration: 0,
      delay: 0.5,
    })
  })

  return (
    <Layout>
      <SEO />
      <article ref={homeRef} className="main home">
        <Carousel edges={edges} />
      </article>
    </Layout>
  )
}

Home.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              slug: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              screenshot: PropTypes.object.isRequired,
              description: PropTypes.string.isRequired,
              demoLink: PropTypes.string.isRequired,
              codeLink: PropTypes.string.isRequired,
              techUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
            }),
          }),
        }),
      ),
    }),
  }),
}

export default Home

export const projectQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: id }, limit: 3) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            description
            demoLink
            codeLink
            techUsed
            screenshot {
              childImageSharp {
                gatsbyImageData(width: 700, formats: [JPG])
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
