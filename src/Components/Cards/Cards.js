import React from 'react'
import './card.css'

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
  return (
    <div className="cards">
      {services.map((service) => {
        return (
          <Card key={service.id} title={service.title}>
            <img src={service.url} alt={service.title} />
          </Card>
        )
      })}
    </div>
  )
}

export default Cards
