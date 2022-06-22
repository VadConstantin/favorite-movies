import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContext } from 'App'
import './services.css'

const Service = () => {
  const params = useParams()
  const {services} = useContext(ThemeContext)
  const {getService} = useContext(ThemeContext)

  const service = getService(parseInt(params.id))[0]

  console.log(service.title);

  return(
    <div>
      <div id="service-title" >
        Service
      </div>
      <div className='service'>
        {service.title.substring(0,20)}...
      </div>
    </div>
  )
}

export default Service
