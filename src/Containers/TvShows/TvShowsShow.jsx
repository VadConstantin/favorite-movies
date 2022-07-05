import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'Components/Movies/movies.css'
import { propTypes } from 'react-bootstrap/esm/Image'

export const TvShowsShow = (props) => {

  const params = useParams()

  const infos = props.tvShows.filter(mov => mov.rank === params.id)[0]
  const imageUrl = infos?.image.slice(0, -27) + ".jpeg"


  const handleClick = () => {
    props.favorite(infos)
  }

  return (
    props.tvShows.length > 0 && (
      <div className="container pt-5">
        <div><strong>{infos?.title}</strong> ({infos?.year})</div>
        <button onClick={handleClick}> Add to favorites </button>
        <p>{infos?.crew}</p>
        <img className="movie-image" src={imageUrl} alt={infos?.title} />
      </div>
    )
  )
}
