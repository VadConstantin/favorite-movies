import React, { useContext } from 'react'
import { CardsLayout } from 'Components'
import { MainContext } from '../../App'
import './services.css'

export const Services = ({ services }) => {
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
