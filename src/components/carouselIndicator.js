import React from 'react'
import PropTypes from 'prop-types'
import CarouselIndicatorItem from './carouselIndicatorItems'

const CarouselIndicator = ({ current, slideLen }) => {
  const slides = Array.from({ length: slideLen }, (_, index) => index)

  const indicators = slides.map((slide) => (
    <CarouselIndicatorItem key={slide} index={slide} current={current} />
  ))

  return <section className="carousel-indicator">{indicators}</section>
}

CarouselIndicator.propTypes = {
  current: PropTypes.number.isRequired,
  slideLen: PropTypes.number.isRequired,
}

export default CarouselIndicator
