import React, { useState, useCallback, useMemo, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from 'Components/Navbar/Navbar'
import { Service, Services } from 'Containers/Services'
import { Home } from 'Containers/Home'

const THEMES = {
  light: {
    background: "rgb(255, 255, 255)",
    color: "rgb(48, 47, 51)",

  },
  dark: {
    background: "rgb(48, 47, 51)",
    color: "rgb(255, 255, 255)",
  }
}

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=20'


// initializing the context ThemeContext
export const MainContext = React.createContext({
  theme: THEMES.dark,
  toggleTheme: () => {},
  services: [],
})


function App() {

  const [themeValue, setThemeValue ] = useState(THEMES.light)
  const [services, setServices ] = useState([])

  // toggling theme value
  const toggleTheme = useCallback(() => {
    setThemeValue(t => t === THEMES.dark ? THEMES.light : THEMES.dark)
  }, [])

  // fetching data from API and setting 'services' value
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setServices(data)
      })
  }, [url])

  // creating the final value to pass to the provider
  const value = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme,
      services,
    }
  }, [themeValue, services, toggleTheme])

  return (
    <MainContext.Provider value={value}>
      <Navbar/>
      <div style={value.theme}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<Service services={services}/>} />
        </Routes>
      </div>

    </MainContext.Provider>
  );
}

export default App;
