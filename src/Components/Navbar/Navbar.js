import React, { useContext } from 'react'
import './navbar.css'
import { ThemeContext } from 'App'

export const Navbar = () => {
  const context = useContext(ThemeContext)
  const {toggleTheme} = useContext(ThemeContext)

  return(
    <div style={context.theme}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div>Home</div>
          <div>Mate</div>
          <button onClick={toggleTheme}> switch theme</button>
        </div>
      </nav>
    </div>
  )
}
