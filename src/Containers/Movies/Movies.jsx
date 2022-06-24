import React, { useEffect, useState } from 'react'
import { Movie} from 'Containers/Movies/Movie'
import './movies.css'

export const Movies = ({movies}) => {

  return(
    <div>
      <div id="movies-title">Movies</div>
      <div className="movie-cards">
        {movies.map((movie) => {
          return <Movie key={movie.id}
          title={movie.title}
          year={movie.year}
          image={movie.image}
          />
        })}

      </div>
    </div>
  )
}
