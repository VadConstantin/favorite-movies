import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'
import { MainContext } from '../../App'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const context = useContext(MainContext)
  const {toggleTheme} = useContext(MainContext)

  const [profile, setProfile ] = useState({firstName: "", familyName: ""})

  useEffect(() => {

    const intervalID = setInterval(() => {
      const localStorageData = JSON.parse(localStorage.getItem('myData'))
      setProfile(localStorageData)
    }, 1000);

    return () => {
      clearInterval(intervalID)
    }
  }, )

  return(
    <div className="navbar-container pos">
      <nav style={context.theme} className="navbar">
        <div className="container-fluid">
          <div className="display-flex-links">
            <Link to="/">Home</Link>
            {/* <Link to="/services">Services</Link> */}
            <Link to="/movies">Movies</Link>
            <Link to="/form">Form</Link>
          </div>
          <div>
            <strong>Me:</strong> {profile.firstName || ""} {profile.familyName || ""}
          </div>
          <div className="switch-button">
            <button className="btn btn-primary" onClick={toggleTheme}> switch theme</button>
          </div>
        </div>
      </nav>
    </div>
  )
}
