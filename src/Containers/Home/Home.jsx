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
        {tvShows.filter(tv => tv.title.toLowerCase().includes(input.toLowerCase())).map((tv) => {
          return <Link key={tv.id} to={"/tvshows/" + tv.rank}>
            <MovieCard
              title={tv.title}
              year={tv.year}
              image={tv.image}
            /></Link>
        })}
      </div>
    </div>
  )
}
