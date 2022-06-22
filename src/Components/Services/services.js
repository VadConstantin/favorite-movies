import React, { useEffect, useState, useContext } from 'react'
import  Cards  from 'Components/Cards/Cards'
import { MainContext } from 'App'
import './services.css'

const Services = () => {

  const {services} = useContext(MainContext)
  const {theme} = useContext(MainContext)

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
