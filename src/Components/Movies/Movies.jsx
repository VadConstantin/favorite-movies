import React, { useState, useCallback } from 'react'
import { MovieCard } from 'Components/Movies/MovieCard'
import { Link } from 'react-router-dom'
import './movies.css'


export const Movies = (props) => {

  const [ toggleSort, setToggleSort ] = useState(false)
  const [ toggleMostRated, setToggleMostRated ] = useState(false)
  const [ input, setInput ] = useState("")

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  })

  const isFav = (n) => {
    return Object.keys(localStorage).includes(n)
  }

  const sortMovies = (movies) => {
    return movies.sort((a, b) => a.title.localeCompare(b.title))
  }

  const handleToggleSort = () => {
    setToggleSort(prev => !prev)
  }

  const MostRated = (movies) => {
    return movies.sort((a, b) => a.imDbRating.localeCompare(b.imDbRating))
  }

  const handleToggleMostRated = () => {
    setToggleMostRated(prev => !prev)
  }

  let moviesToRender = []

  if (toggleSort) {
    moviesToRender = sortMovies(props.movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase())))
  } else if (toggleMostRated) {
    moviesToRender = MostRated(props.movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase())))
  } else {
    moviesToRender = props.movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()))
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

      <div className="display-flex">
        <div className='form-check sort-checkbox'>
          <input id="sort" type="checkbox" onClick={handleToggleSort} className="form-check-input " />
          <label className="form-check-label" htmlFor="sort">Sort Movies (A-Z)</label>
        </div>
        <div className='form-check sort-checkbox'>
          <input id="rated" type="checkbox" onClick={handleToggleMostRated} className="form-check-input " />
          <label className="form-check-label" htmlFor="rated">Most Rated Movies</label>
        </div>
      </div>

      <div className="movie-cards">
        {moviesToRender.map((movie) => {
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
