import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { gsap } from 'gsap'

import Layout from './layout'
import SEO from '../pages/seo'

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  const image = getImage(frontmatter.screenshot)

  const projectRef = useRef(null)

  useEffect(() => {
    gsap.to(projectRef.current, {
      opacity: 1,
      duration: 0,
      delay: 0.5,
    })
  })

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        pathname={frontmatter.slug}
        image={`${image.images.fallback.src}`}
        article
      />
      <article ref={projectRef} className="main project">
        <section className="project__head">
          <h1 className="project__head--title">{frontmatter.title}</h1>
          <GatsbyImage
            className="project__head--img"
            image={image}
            alt={frontmatter.title}
          />
        </section>
      </article>
    </Layout>
  )
}

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        screenshot: PropTypes.object.isRequired,
        demoLink: PropTypes.string.isRequired,
        codeLink: PropTypes.string.isRequired,
        techUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    }),
  }),
}

export default ProjectTemplate

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        description
        screenshot {
          childImageSharp {
            gatsbyImageData(width: 600, placeholder: BLURRED, formats: [JPG])
            fluid {
              src
            }
          }
        }
        demoLink
        codeLink
        techUsed
      }
    }
  }
`
