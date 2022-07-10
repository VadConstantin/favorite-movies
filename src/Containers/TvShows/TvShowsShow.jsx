import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'Components/Movies/movies.css'

export const TvShowsShow = (props) => {

  const params = useParams()

  const infos = props.tvShows.filter(mov => mov.rank === params.id)[0]
  const imageUrl = infos?.image.slice(0, -27) + ".jpeg"

  //checking if movie is already favorited in localstorage ?
  const isFav = Object.keys(localStorage).includes(infos?.rank) ? true : false

  const handleClick = () => {
    localStorage.setItem(`${infos.rank}`, JSON.stringify(infos))
    window.location.reload()
  }

  const handleDeleteFav = () => {
    localStorage.removeItem(`${infos.rank}`)
    window.location.reload()
  }

  return (
    props.tvShows.length > 0 && (
      <div className="container pt-5">

          <div><strong>{infos?.title}</strong> ({infos?.year})</div>
          <button className={!isFav ? "btn btn-primary" : "btn btn-primary disabled"} onClick={handleClick}>
            {!isFav ? "Add to favorites" : "Already favorited" }
          </button>
            {isFav && <button className="btn btn-primary ms-3" onClick={handleDeleteFav}>Remove from favorites</button>}
          <p>{infos?.crew}</p>
        <div className="show-card-tv">
          <img className="movie-image" src={imageUrl} alt={infos?.title} />
          <svg className={isFav ? "heart-icone-active" : "heart-icone-disable"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" /></svg>
        </div>
      </div>
    )
  )
}