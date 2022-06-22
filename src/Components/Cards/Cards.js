import React, {useContext} from 'react'
import './card.css'
import { ThemeContext } from 'App'

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

  const context2 = useContext(ThemeContext)
  console.log(context2);

  return (
    <div className="cards" style={context2.theme}>
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
