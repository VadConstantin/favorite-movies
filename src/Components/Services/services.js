import React, { useEffect, useState, useContext } from 'react'
import  Cards  from 'Components/Cards/Cards'
import { ThemeContext } from 'App'
import './services.css'

const Services = () => {

  const {services} = useContext(ThemeContext)
  const {theme} = useContext(ThemeContext)

  return (
    <div>
      <div id="services-title" style={theme}>
        Services
      </div>
      <Cards services={services} />
    </div>
  )
}

export default Services
