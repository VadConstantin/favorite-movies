import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './movies.css'

export const MovieShow = ({movies}) => {

  const navigate = useNavigate()
  const params = useParams()

  const movie = movies?.filter(mov => mov.rank === params.id)[0]

  const movieUrl = movie?.image

  const addToFavorites = () => {
    localStorage.setItem(`${movie.id}`, JSON.stringify(movie))
    window.location.reload()
  }

  const isFav = Object.keys(localStorage).includes(movie?.id)

  return(
    movies.length > 0 && (
      <div className="container pt-5">
        <button className="go-back" onClick={() => navigate(-1)}> Go back</button>
        <div><strong>{movie.title}</strong> ({movie.year})</div>
        <button onClick={addToFavorites} className={"btn btn-primary"}>
          Add to favorites
        </button>
        <p>{movie.crew}</p>
        <img className="movie-image" src={movieUrl} alt={movie.title} />
      </div>
    )
  )
}
