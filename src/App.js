import React, { useState, useContext, useCallback, useMemo} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'Components/Home/Home'
import { Navbar } from 'Components/Navbar/Navbar'
import Services from './Components/Services/services'

const THEMES = {
  light: {
    background: "rgb(255, 255, 255)",
    color: "rgb(48, 47, 51)"
  },
  dark: {
    background: "rgb(48, 47, 51)",
    color: "rgb(255, 255, 255)"
  }
}

export const ThemeContext = React.createContext({
  theme: THEMES.dark,
  toggleTheme: () => {}
})

function App() {

  const [themeValue, setThemeValue ] = useState({})
  const toggleTheme = useCallback(() => {
    setThemeValue(t => t === THEMES.dark ? THEMES.light : THEMES.dark)
  })

  const value = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme
    }
  }, [themeValue, toggleTheme])

  return (
    <ThemeContext.Provider value={value}>
      <Navbar/>
      <div className="container" style={value.theme}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />} />
      </Routes>
      </div>

    </ThemeContext.Provider>
  );
}

export default App;
