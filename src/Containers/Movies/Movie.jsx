import React, { useRef, useState } from 'react'
import './movies.css'

export const Movie = (props) => {

  const [ active, setActive ] = useState(false)

  // this could have been made with CSS hover but it was for fun :)
  const handleEnter = () => {
    console.log("enter")
    setActive(t => !t)
  }

  const handleExit = () => {
    console.log("exit")
    setActive(t => !t)
  }

  const movieUrl = props.image.slice(0, -27) + ".jpeg"
  const movieTitle = props.title.length > 20 ? props.title.substring(0, 20) + " ..." : props.title
  const movieYear = props.year

  return(
    <div onMouseEnter={handleEnter} onMouseLeave={handleExit} className={active ? "active" : null}>
      <div className="movie-title"> {movieTitle} <small> ({movieYear}) </small></div>
      <div className="movie-card" style={{ backgroundImage: `url(${movieUrl})`}}>
      </div>
    </div>
  )
}
