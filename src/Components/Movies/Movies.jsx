import React, { useState, useCallback } from 'react'
import { MovieCard } from 'Components/Movies/MovieCard'
import { Link } from 'react-router-dom'
import './movies.css'


export const Movies = (props) => {

  const [ toggleSort, setToggleSort ] = useState(false)
  const [ input, setInput ] = useState("")

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  })


  const sortMovies = (movies) => {
    return movies.sort((a, b) => a.title.localeCompare(b.title))
  }
  // const [ movies, setMovies] = useState(props.movies)

  const handleToggleSort = () => {
    setToggleSort(prev => !prev)
  }

  const isFav = (n) => {
    return Object.keys(localStorage).includes(n)
  }

  return(
    <div>
      <div className="display-flex">
        <div id="movies-title">Movies</div>

        <form className="movie-form">
          <label htmlFor="filter">Find movie ! </label>
          <input id="filter" type="text" onChange={handleChange}/>
        </form>

      </div>

      <button onClick={handleToggleSort} className="btn btn-primary sort-button">{!toggleSort ? "Sort movies (A-Z)" : "Cancel sorting"}</button>

      <div className="movie-cards">
        {toggleSort ? sortMovies(props.movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()))).map((movie) => {
            return <Link key={movie.id} to={"/movies/" + movie.rank}>
              <MovieCard
              title={movie.title}
              year={movie.year}
              image={movie.image}
              isFav={isFav(movie.id)}
              /></Link>
            }) :
            props.movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase())).map((movie) => {
            return <Link key={movie.id} to={"/movies/" + movie.rank}>
              <MovieCard
              title={movie.title}
              year={movie.year}
              image={movie.image}
              isFav={isFav(movie.id)}
              /></Link>
            })
        }
      </div>
    </div>
  )
}
