import React from 'react'
import './card.css'

export const Card = ({ title, children }) => {
  return (
    <div className='card'>
      {title}
      <div className="image">
        {children}
      </div>
    </div>
  )
}
