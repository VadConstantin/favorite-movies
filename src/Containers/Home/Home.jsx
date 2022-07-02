import React, { useContext, useState, useCallback } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { MovieCard } from 'Components/Movies/MovieCard'

export const Home = ({ tvShows }) => {

  const [input, setInput] = useState("")

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  })

  return (
    <div>
      <div className="display-flex">
        <div id="movies-title">Tv Shows</div>

        <form className="movie-form">
          <label htmlFor="filter">Find a tv show ! </label>
          <input id="filter" type="text" onChange={handleChange} />
        </form>
      </div>

      <div className="movie-cards">
        {tvShows.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase())).map((movie) => {
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
