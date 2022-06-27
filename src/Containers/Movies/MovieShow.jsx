import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './movies.css'

export const MovieShow = ({movies}) => {

  const params = useParams()

  const movie = movies?.filter(mov => mov.rank === params.id)[0]
  console.log(movie);

  const movieUrl = movie.image.slice(0, -27) + ".jpeg"

  return(
    movies.length > 0 && (
      <div className="container pt-5">
        <div><strong>{movie.title}</strong> ({movie.year})</div>
        <p>{movie.crew}</p>
        <img className="movie-image" src={movieUrl} alt={movie.title} />
      </div>
    )
  )
}
