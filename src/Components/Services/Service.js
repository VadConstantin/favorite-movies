import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import './services.css'

const Service = ({services}) => {

  const params = useParams()
  const service = services.filter(t => t.id === parseInt(params.id))[0]

  console.log(service);

  return(
    services.length > 0 &&
    <div>
      <div id="service-title" >
        Service
      </div>
      <div className='service'>
        <strong>Title: </strong>{service.title}...
        <img src={service.url} alt={service.title} />
      </div>
    </div>
  )
}

export default Service
