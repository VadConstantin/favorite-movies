import React, { useContext } from 'react'
import { CardsLayout } from 'Components'
import { MainContext } from 'App'
import './services.css'

export const Services = () => {

  const {services} = useContext(MainContext)
  const {theme} = useContext(MainContext)

  return (
    <div>
      <div id="services-title" style={theme}>
        Services
      </div>
      <CardsLayout services={services} />
    </div>
  )
}
