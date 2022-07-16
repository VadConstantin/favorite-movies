import React from 'react'
import { Link } from 'react-router-dom'
import './favorites.css'

export const Favorites = () => {

  const setShortName = (name) => {
    return name?.length > 25 ?
      name?.substring(0, 25) + " ..." :
      name
  }

  const handleDeleteFav = (n) => {
    localStorage.removeItem(n)
    window.location.reload()
  }

  const favoriteTvShowsRanks = Object.entries(localStorage)
    .filter(t => !t[0].includes('myData'))
    .filter(t => !t[0].includes('tt'))
    .filter(t => !t[0].includes('scrollpos'))
    .map(t => JSON.parse(t[1]))


  const favoriteMoviesIds = Object.entries(localStorage)
    .filter(t => t[0].includes('tt'))
    .map(t => JSON.parse(t[1]))


  console.log(favoriteMoviesIds[0]);


  return(
    <div className="">
      <div>
        <p id="section-title">My favorite movies</p>
        <br />
        <div className="mini-cards-wrapper">
          {favoriteMoviesIds.map(n => {
            return <div key = { n.id }>
              <div className="movie-card-container">
                      <Link to={"/movies/" + n.rank}>
                        <div className="mini-card">
                          <p> {setShortName(n.title)} </p>
                          <img src={n.image} alt="imag"/>
                        </div>
                      </Link>
                    </div>
                <button className="delete-button" onClick={() => handleDeleteFav(n.id)}>x</button>
              </div>
          })}
        </div>
      </div>

      <div className="mt-4">
        <p id="section-title">My favorite TV shows</p>
        <br />
        <div className="mini-cards-wrapper">
          {favoriteTvShowsRanks.map(n => {
            return <div key = { n.id }>
              <div className="movie-card-container">
                      <Link to={"/tvshows/" + n.rank}>
                        <div className="mini-card">
                          <p> {setShortName(n.title)} </p>
                          <img src={n.image} alt="imag"/>
                        </div>
                      </Link>
                    </div>
              <button className="delete-button" onClick={() => handleDeleteFav(n.rank)}>x</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
