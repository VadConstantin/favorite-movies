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
  }, [])

  return(
    <div className="navbar-container pos">
      <nav style={context.theme} className="navbar">
        <div className="container-fluid">
          <div className="display-flex-links">
            <Link to="/">Tv Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/account">Account</Link>
          </div>
          <div>
            <Link to="/account" >
              <strong>My profile - </strong>
              {profile?.firstName || ""} {profile?.familyName || ""}
            </Link>
          </div>
          <div className="switch-button">
            <button className="btn btn-primary" onClick={toggleTheme}> switch theme</button>
          </div>
        </div>
      </nav>
    </div>
  )
}
