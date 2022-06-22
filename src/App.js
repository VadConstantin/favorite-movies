import React, { useState, useCallback, useMemo, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'Components/Home/Home'
import { Navbar } from 'Components/Navbar/Navbar'
import Services from './Components/Services/Services'
import Service from './Components/Services/Service'

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
export const ThemeContext = React.createContext({
  theme: THEMES.dark,
  toggleTheme: () => {},
  services: [],
  getService: () => {}
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


  // getting service from services
  const getService = useCallback((x) => {
    return services.filter(t => t.id === x)
  }, [services])


  // creating the final value to pass to the provider
  const value = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme,
      services,
      getService
    }
  }, [themeValue, services])

  return (
    <ThemeContext.Provider value={value}>
      <Navbar/>
      <div style={value.theme}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<Service />} />
        </Routes>
      </div>

    </ThemeContext.Provider>
  );
}

export default App;
