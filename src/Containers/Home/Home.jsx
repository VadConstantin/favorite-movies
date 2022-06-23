import React, { useContext } from 'react'
import { CardsLayout }  from 'Components/'
import { MainContext } from '../../App'
import './home.css'

export const Home = ({ services }) => {
  const {theme} = useContext(MainContext)
  // const {services} = useContext(MainContext)



  return(
    <div>
      <div id="home-title" style={theme}>
        Home
      </div>
      <CardsLayout services={services} />
    </div>
  )
}
