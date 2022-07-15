import { useParams, useNavigate } from 'react-router-dom'
import './movies.css'

export const MovieShow = ({movies}) => {

  const navigate = useNavigate()
  const params = useParams()

  const movie = movies?.filter(mov => mov.rank === params.id)[0]

  const movieUrl = movie?.image

  const handleAddToFavorites = () => {
    localStorage.setItem(movie.id, JSON.stringify(movie))
    window.location.reload()
  }

  const handleDeleteFav = () => {
    localStorage.removeItem(movie.id)
    window.location.reload()
  }

  const isFav = Object.keys(localStorage).includes(movie?.id)

  return(
    movies.length > 0 && (
      <div className="container pt-5">
        <button className="go-back" onClick={() => navigate(-1)}> Go back</button>
        <div><strong>{movie.title}</strong> ({movie.year})</div>
        <button onClick={handleAddToFavorites} className={!isFav ? "btn btn-primary" : "btn btn-primary disabled"}>
          {!isFav ? "Add to favorites" : "Already favorited"}
        </button>
        {isFav && <button className="btn btn-primary ms-3" onClick={handleDeleteFav}>Remove from favorites</button>}
        <p>{movie.crew}</p>
        <img className="movie-image" src={movieUrl} alt={movie.title} />
        <svg className={isFav ? "movie-heart-icone-active" : "movie-heart-icone-disable"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" /></svg>
      </div>
    )
  )
}
