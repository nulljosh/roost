import React, { useState, useRef } from 'react'

export default function ImageCarousel({ images, alt, className }) {
  const [index, setIndex] = useState(0)
  const touchRef = useRef(null)
  const imgs = images && images.length > 0 ? images : []

  if (imgs.length === 0) {
    return <div className={`carousel ${className || ''}`} />
  }

  function prev(e) {
    e.preventDefault()
    e.stopPropagation()
    setIndex(i => (i - 1 + imgs.length) % imgs.length)
  }

  function next(e) {
    e.preventDefault()
    e.stopPropagation()
    setIndex(i => (i + 1) % imgs.length)
  }

  function onTouchStart(e) {
    touchRef.current = e.touches[0].clientX
  }

  function onTouchEnd(e) {
    if (touchRef.current === null) return
    const delta = e.changedTouches[0].clientX - touchRef.current
    touchRef.current = null
    if (Math.abs(delta) < 40) return
    if (delta < 0) {
      setIndex(i => (i + 1) % imgs.length)
    } else {
      setIndex(i => (i - 1 + imgs.length) % imgs.length)
    }
  }

  return (
    <div
      className={`carousel ${className || ''}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <img
        src={imgs[index]}
        alt={`${alt} - photo ${index + 1}`}
        className="carousel__img"
        loading="lazy"
      />
      {imgs.length > 1 && (
        <>
          <button className="carousel__arrow carousel__arrow--left" onClick={prev} aria-label="Previous photo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="carousel__arrow carousel__arrow--right" onClick={next} aria-label="Next photo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
          <div className="carousel__dots">
            {imgs.map((_, i) => (
              <span
                key={i}
                className={`carousel__dot${i === index ? ' carousel__dot--active' : ''}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
