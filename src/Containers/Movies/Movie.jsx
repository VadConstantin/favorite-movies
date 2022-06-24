import React from 'react'
import './movies.css'

export const Movie = (props) => {
  const movieUrl = props.image.slice(0, -30) + ".jpeg"
  const movieTitle = props.title.length > 20 ? props.title.substring(0, 20) + " ..." : props.title
  const movieYear = props.year

  return(
    <div>
      <div className="movie-title"> {movieTitle} <small> ({movieYear}) </small></div>
      <div className="movie-card" style={{ backgroundImage: `url(${movieUrl})`}}>
      </div>
    </div>
  )
}
