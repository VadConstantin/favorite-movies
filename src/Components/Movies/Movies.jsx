import React, { useEffect, useState } from 'react'
import { MovieCard } from 'Components/Movies/MovieCard'
import { Link } from 'react-router-dom'
import './movies.css'

export const Movies = ({movies}) => {

  return(
    <div>
      <div id="movies-title">Movies</div>
      <div className="movie-cards">
        {movies.map((movie) => {
          return <Link key={movie.id} to={"/movies/" + movie.rank}>
            <MovieCard
            title={movie.title}
            year={movie.year}
            image={movie.image}
            /></Link>
        })}
      </div>
    </div>
  )
}
