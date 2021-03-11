import React from 'react'
import PropTypes from 'prop-types'

const CarouselItem = ({ edge }) => {
  return (
    <div className="carousel-item">
      <h1 className="carousel-item__title">{edge.frontmatter.title}</h1>
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
