import React, { useState, useEffect, useLayoutEffect, useContext } from 'react'
import Cards  from 'Components/Cards/Cards'
import { ThemeContext } from 'App'
import './home.css'

const Home = () => {

  const {theme} = useContext(ThemeContext)
  const {services} = useContext(ThemeContext)

  return(
    <div>
      <div id="home-title" style={theme}>
        Home
      </div>
      <Cards services={services} />
    </div>
  )
}

export default Home
