import React, { useEffect, useState } from 'react'
import { Movie} from 'Components/Movies/Movie'
import { Link } from 'react-router-dom'
import './movies.css'

export const Movies = ({movies}) => {

  return(
    <div>
      <div id="movies-title">Movies</div>
      <div className="movie-cards">
        {movies.map((movie) => {
          return <Link to={"/movies/" + movie.id}>
            <Movie
            key={movie.id}
            title={movie.title}
            year={movie.year}
            image={movie.image}
            /></Link>
        })}
      </div>
    </div>
  )
}
