import React, { useEffect, useState, useCallback } from 'react'
import { MovieCard } from 'Components/Movies/MovieCard'
import { Link } from 'react-router-dom'
import './movies.css'

export const Movies = ({movies}) => {

  const [ input, setInput ] = useState("")

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  })

  return(
    <div>
      <div className="display-flex">
        <div id="movies-title">Movies</div>

        <form className="movie-form">
          <label htmlFor="filter">Find movie ! </label>
          <input id="filter" type="text" onChange={handleChange}/>
        </form>
      </div>


      <div className="movie-cards">
        {movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase())).map((movie) => {
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
