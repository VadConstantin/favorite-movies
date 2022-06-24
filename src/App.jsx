import React, { useState, useCallback, useMemo, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from 'Components/Navbar/Navbar'
import { Service, Services } from 'Containers/Services'
import { Home } from 'Containers/Home'
import { Theme } from './Utilities'
import { Movies } from 'Containers/Movies/Movies'

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=20'
const moviesUrl = "https://imdb-api.com/en/API/Top250Movies/k_7iuspfzy"

// initializing the context ThemeContext
export const MainContext = React.createContext({
  theme: Theme.dark,
  toggleTheme: () => {},
  services: [],
});


function App() {
  const [ services, setServices ] = useState([])
  const [ themeValue, setThemeValue ] = useState(Theme.light)
  const [ movies, setMovies ] = useState([])

  //fetching movies
  useEffect(() => {
    fetch(moviesUrl)
      .then(res => res.json())
      .then(data => {
        setMovies(data.items);
      })

  }, [moviesUrl])

  // toggling theme value
  const toggleTheme = useCallback(() => {
    setThemeValue(t => t === Theme.dark ? Theme.light : Theme.dark)
  }, [])

  // creating the final value to pass to the provider
  const value = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme,
      services,
    }
  }, [themeValue, services, toggleTheme])

  // fetching data from API and setting 'services' value
  // Don't need to add URL as a dependency as it is a non-changing variable
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])

  return (
    <MainContext.Provider value={value}>
      <Navbar/>
      <div style={value.theme}>
        <Routes>
          <Route path="/" element={<Home services={services} />}/>
          <Route path="/services" element={<Services services={services} />} />
          <Route path="/services/:id" element={<Service services={services}/>} />
          <Route path="/movies" element={<Movies movies={movies}/>} />
        </Routes>
      </div>
    </MainContext.Provider>
  );
}

export default App;
