import React, {useContext} from 'react'
import './card.css'
import { MainContext } from 'App'
import {Link} from 'react-router-dom'

const Card = ({ title, children }) => {
  return (
    <div className='card'>
      {title}
      <div className="image">
        {children}
      </div>
    </div>
  )
}

const Cards = ({ services }) => {

  const {theme} = useContext(MainContext)

  return (
    <div style={theme}>
      <div className="cards" >
        {services.map((service) => {
          return (
          <Link key={service.id} to={"/services/" + service.id}>
            <Card key={service.id} title={service.title}>
              <img src={service.url} alt={service.title} />
            </Card>
          </Link>
          )
        })}
      </div>
    </div>

  )
}

export default Cards
