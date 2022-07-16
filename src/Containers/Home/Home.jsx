import React, { useState, useCallback } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { MovieCard } from 'Components/Movies/MovieCard'

export const Home = ({ tvShows }) => {

  const [input, setInput] = useState("")
  const [toggleSort, setToggleSort] = useState(false)
  const [toggleMostRated, setToggleMostRated] = useState(false)

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  })

  const isFav = (n) => {
    return Object.keys(localStorage).includes(n)
  }


  const handleToggleSort = () => {
    setToggleSort(prev => !prev)
  }

  const sortTvShows = (tvshows) => {
    return tvshows.sort((a, b) => a.title.localeCompare(b.title))
  }

  const handleToggleMostRated = () => {
    setToggleMostRated(prev => !prev)
  }

  const MostRated = (tvshows) => {
    return tvshows.sort((a,b) => a.imDbRating.localeCompare(b.imDbRating))
  }


  let tvShowsToRender = []

  if (toggleSort) {
    tvShowsToRender = sortTvShows(tvShows.filter(tv => tv.title.toLowerCase().includes(input.toLowerCase())))
  } else if (toggleMostRated) {
    tvShowsToRender = MostRated(tvShows.filter(tv => tv.title.toLowerCase().includes(input.toLowerCase())))
  } else {
    tvShowsToRender = tvShows.filter(tv => tv.title.toLowerCase().includes(input.toLowerCase()))
  }

  const toggleFavorite = (tvshow) => {
    !isFav(tvshow.rank) ? localStorage.setItem(`${tvshow.rank}`, JSON.stringify(tvshow))
      : localStorage.removeItem(`${tvshow.rank}`)
    window.location.reload()
  }

  return (
    <div>
      <div className="display-flex">
        <div id="movies-title">Tv Shows</div>
        <form className="movie-form">
          <label htmlFor="filter">Find a tv show ! </label>
          <input id="filter" type="text" onChange={handleChange} />
        </form>
      </div>

      <div className="display-flex">
        <div className='form-check sort-checkbox'>
          <input id="sort" type="checkbox" onClick={handleToggleSort} className="form-check-input "/>
          <label className="form-check-label" htmlFor="sort">Sort TV Shows (A-Z)</label>
        </div>
        <div className='form-check sort-checkbox'>
          <input id="rated" type="checkbox" onClick={handleToggleMostRated} className="form-check-input "/>
          <label className="form-check-label" htmlFor="rated">Lowest Rated TV Shows</label>
        </div>
      </div>

      <div className="movie-cards">
        {tvShowsToRender.map((tv) => {
          return (
          <div className="card-and-button">
            <Link key={tv.id} to={"/tvshows/" + tv.rank}>
            <MovieCard
              title={tv.title}
              year={tv.year}
              image={tv.image}
              isFav={isFav(tv.rank)}
              rating={tv.imDbRating}
            /></Link>
            <button className="add-to-favorites-button" onClick={() => toggleFavorite(tv)}> {!isFav(tv.rank) ? "Add to favorites" : "Remove from fav"} </button>
          </div>)
          })
        }
      </div>
    </div>
  )
}
