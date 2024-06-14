import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './carrousel.scss'

export default function Carrousel({ slides, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  function ShowChevron() {
    if (slides.length <= 1) {
      return null
    } else {
      return (
        <div>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={prevSlide}
            className="left_chevron"
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={nextSlide}
            className="right_chevron"
          />
        </div>
      )
    }
  }

  function ShowIndex() {
    if (slides.length <= 1) {
      return null
    } else {
      return (
        <div className="current_slide">
          {currentIndex + 1} / {slides.length}
        </div>
      )
    }
  }

  return (
    <div className="carrousel_container">
      <ShowIndex />
      <ShowChevron />
      <div
        className="carrousel_img_container"
        style={{ translate: -currentIndex * 100 + '%' }}
      >
        {slides.map((slide, slideIndex) => {
          return (
            <img
              key={slideIndex}
              src={slide}
              alt={alt}
              className="carrousel_img"
            />
          )
        })}
      </div>
    </div>
  )
}
