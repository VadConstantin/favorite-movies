import React, { useState, useCallback, useMemo, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from 'Components/Navbar/Navbar'
import { Home } from 'Containers/Home'
import { Theme } from './Utilities'
import { Movies } from 'Components/Movies/Movies'
import { MovieShow }  from 'Containers/Movies/MovieShow'
import Form from 'Components/Form/Form'

const tvUrl = 'https://imdb-api.com/en/API/Top250TVs/k_7iuspfzy'
const moviesUrl = "https://imdb-api.com/en/API/Top250Movies/k_7iuspfzy"

// initializing the context ThemeContext
export const MainContext = React.createContext({
  theme: Theme.dark,
  toggleTheme: () => {},
  tvShows: [],
});

function App() {

  const [ tvShows, setTvShows ] = useState([])
  const [ themeValue, setThemeValue ] = useState(Theme.light)
  const [ movies, setMovies ] = useState([])

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
  }, [])

  // creating the final value to pass to the provider
  const value = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme,
      tvShows,
    }
  }, [themeValue, tvShows, toggleTheme])

  return (
    <MainContext.Provider value={value}>
      <Navbar />
      <div style={{paddingTop: "50px"}}>
        <div style={value.theme}>
          <Routes>
            <Route path="/" element={<Home tvShows={tvShows} />}/>
            {/* <Route path="/tvshows" element={<Services tvShows={tvShows} />} />
            <Route path="/tvshows/:id" element={<Service tvShows={tvShows}/>} /> */}
            <Route path="/movies" element={<Movies movies={movies}/>} />
            <Route path="/form" element={<Form />} />
            <Route path="/movies/:id" element={<MovieShow movies={movies} />} />
          </Routes>
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
