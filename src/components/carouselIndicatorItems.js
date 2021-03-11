import React from 'react'
import PropTypes from 'prop-types'

const CarouselIndicatorItem = ({ current, index }) => {
  return (
    <div
      className={
        current === index
          ? 'carousel-indicator__item active-indicator'
          : 'carousel-indicator__item'
      }
    ></div>
  )
}

CarouselIndicatorItem.propTypes = {
  current: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
}

export default CarouselIndicatorItem
