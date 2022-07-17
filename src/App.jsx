import React, { useState, useCallback, useMemo, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from 'Components/Navbar/Navbar'
import { Home } from 'Containers/Home'
import { Theme } from './Utilities'
import { Movies } from 'Components/Movies/Movies'
import { MovieShow }  from 'Containers/Movies/MovieShow'
import { TvShowsShow } from 'Containers/TvShows/TvShowsShow'
import { Favorites } from 'Containers/Favorites/Favorites'
import Form from 'Components/Form/Form'
import './App.css'

const tvUrl = 'https://imdb-api.com/en/API/Top250TVs/k_7iuspfzy'
const moviesUrl = "https://imdb-api.com/en/API/Top250Movies/k_7iuspfzy"


// initializing the context ThemeContext
export const MainContext = React.createContext({
  theme: Theme.dark,
  toggleTheme: () => {},
  tvShows: [],
});

function App() {

  // const defaultTheme = localStorage.getItem('myTheme') !== null ?
  // JSON.parse(localStorage.getItem('myTheme')) :
  // Theme.dark

  const [ tvShows, setTvShows ] = useState([])
  const [ movies, setMovies ] = useState([])
  const [ themeValue, setThemeValue ] = useState(Theme.light)


  console.log(themeValue)

  // fetching tvShows
  useEffect(() => {
    fetch(tvUrl)
      .then(res => res.json())
      .then(data => setTvShows(data.items))
  }, [])

  //fetching movies
  useEffect(() => {
    fetch(moviesUrl)
      .then(res => res.json())
      .then(data => {
        setMovies(data.items);
      })
  }, [])

  // toggling theme value
  const toggleTheme = useCallback(() => {
    setThemeValue(t => t === Theme.dark ? Theme.light : Theme.dark)
    // localStorage.setItem('myTheme', JSON.stringify(themeValue))
  }, [])

  // creating the final value to pass to the provider
  const value = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme,
      tvShows,
    }
  }, [themeValue, tvShows, toggleTheme])

  const toggleOrderMovies = () => {
    setMovies(prev => {
      return prev[0]
    });
  }


  // updating tvShows in local storage

  return (
    <MainContext.Provider value={value}>
      <Navbar />
      <div style={{paddingTop: "50px"}}>
        <div style={value.theme}>
          <Routes>
            <Route path="/" element={<Home tvShows={tvShows} />}/>
            <Route path="/tvshows/:id" element={<TvShowsShow tvShows={tvShows}/>} />
            <Route path="/movies" element={<Movies movies={movies} />} />
            <Route path="/account" element={<Form />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movies/:id" element={<MovieShow movies={movies} />} />
          </Routes>
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
