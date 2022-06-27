import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const MovieShow = ({movies}) => {

  const params = useParams()
  console.log(params.id);

  const movie = movies?.filter(mov => mov.rank === params.id)[0]

  return(
    movies.length > 0 && (
    <div>titre : {movie.title}</div>
    )
  )
}
