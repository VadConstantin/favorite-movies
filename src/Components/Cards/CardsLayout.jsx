import React, {useContext} from 'react'
import './card.css'
import { MainContext } from '../../App'
import {Link} from 'react-router-dom'
import { Card } from './Card'

export const CardsLayout = ({ services }) => {

  const {theme} = useContext(MainContext)

  return (
    <div style={theme}>
      <div className="cards" >
        {services.map((service) => {
          return (
          <Link key={service.id} to={"/services/" + service.id}>
            <Card title={service.title}>
              <img src={service.url} alt={service.title} />
            </Card>
          </Link>
          )
        })}
      </div>
    </div>

  )
}
