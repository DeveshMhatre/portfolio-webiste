import React, { useState } from 'react'

import CarouselItem from './carouselItem'

import PrevBtn from '../assets/left.svg'
import NextBtn from '../assets/right.svg'

const Carousel = ({ edges }) => {
  const [current, setCurrent] = useState(0)

  const Projects = edges.map((edge) => (
    <CarouselItem key={edge.node.id} edge={edge.node} />
  ))

  const prevSlide = () => {
    setCurrent(current === 0 ? slidesLen - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === slidesLen - 1 ? 0 : current + 1)
  }

  return (
    <section className="carousel">
      <button
        className="carousel__btn--left"
        onClick={prevSlide}
        aria-lable="Go Left"
      >
        <PrevBtn />
      </button>
      {Projects}
      <button
        className="carousel__btn--right"
        onClick={nextSlide}
        aria-lable="Go Right"
      >
        <NextBtn />
      </button>
    </section>
  )
}

Carousel.propTypes = {
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
}

export default Carousel
