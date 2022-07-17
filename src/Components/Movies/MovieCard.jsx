import React, { useState } from 'react'
import './movies.css'

export const MovieCard = (props) => {

  const [ active, setActive ] = useState(false)

  // this could have been made with CSS hover but it was for fun :)
  const handleEnter = () => {
    setActive(t => !t)
  }

  const handleExit = () => {
    setActive(t => !t)
  }

  const movieUrl = props.image.slice(0, -27) + ".jpeg"
  const movieTitle = props.title.length > 21 ? props.title.substring(0, 21) + " ..." : props.title
  const movieYear = props.year
  const rating = props.rating

  return(
    <div className="card-container" onMouseEnter={handleEnter} onMouseLeave={handleExit}>
      <div className={active ? "go-up movie-title" : "movie-title"}> {movieTitle} <small> ({movieYear}) </small></div>
      <div className={active ? "active movie-card" : "movie-card"} style={{ backgroundImage: `url(${movieUrl})`}}>
      </div>
      <svg className={props.isFav ? "index-favorite" : "index-favorite-disable"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" /></svg>
      <div className="rating-index">{rating} &#11088;</div>
    </div>
  )
}
