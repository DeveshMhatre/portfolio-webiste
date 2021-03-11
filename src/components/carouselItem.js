import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import gsap from 'gsap/gsap-core'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CarouselItem = ({ edge }) => {
  const itemRef = useRef(null)

  const image = getImage(edge.frontmatter.screenshot)

  useEffect(() => {
    gsap.to(itemRef.current, {
      opacity: 1,
      duration: 0.5,
    })
  })

  return (
    <div ref={itemRef} className="carousel-item">
      <h1 className="carousel-item__title">{edge.frontmatter.title}</h1>
      <GatsbyImage
        className="carousel-item__img"
        image={image}
        alt={edge.frontmatter.title}
      />
      <div className="carousel-item__btns">
        <a
          href={edge.frontmatter.demoLink}
          className="carousel-item__btns--demo"
          target="_blank"
          rel="noreferrer"
        >
          View Demo
        </a>
        <Link
          to={edge.frontmatter.slug}
          className="carousel-item__btns--details"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

CarouselItem.propTypes = {
  edge: PropTypes.shape({
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
}

export default CarouselItem
