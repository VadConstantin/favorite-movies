import React from 'react'
import { useParams } from 'react-router-dom'
import './services.css'

export const Service = (props) => {

  const params = useParams()
  const services = props.services
  const service = services.filter(t => t.id === parseInt(params.id))[0]

  console.log(service);

  return(
    services.length > 0 &&
    <div>
      <div id="service-title" >
        Service
      </div>
      <div className='service'>
        <strong>Title: </strong>{service.title.substring(0,30)}...
        <img src={service.url} alt={service.title} />
      </div>
    </div>
  )
}
