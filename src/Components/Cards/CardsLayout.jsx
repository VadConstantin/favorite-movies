import React, {useContext} from 'react'
import './card.css'
import { MainContext } from '../../App'
import {Link} from 'react-router-dom'
import { Card } from './Card'

export const CardsLayout = ({ tvShows }) => {

  const {theme} = useContext(MainContext)

  return (
    <div style={theme}>
      <div className="cards" >
        {tvShows.map((show) => {
          return (

          <Link key={show.id} to={"/tvshows/" + show.id}>
            <Card title={show.title}>
              <img src={show.image} alt={show.title} />
            </Card>
          </Link>
          )
        })}
      </div>
    </div>

  )
}
