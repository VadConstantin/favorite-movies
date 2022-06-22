import React, { useState, useEffect, useLayoutEffect, useContext } from 'react'
import Cards  from 'Components/Cards/Cards'
import { MainContext } from 'App'
import './home.css'

const Home = () => {

  const {theme} = useContext(MainContext)
  const {services} = useContext(MainContext)

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
