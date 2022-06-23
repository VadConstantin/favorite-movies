import React from 'react'
import { useParams } from 'react-router-dom'
import './services.css'

<<<<<<< HEAD:src/Components/Services/Service.js
const Service = ({services}) => {

  const params = useParams()
  const service = services.filter(t => t.id === parseInt(params.id))[0]
=======
export const Service = ({ services }) => {
  const params = useParams()
  const service = services.filter(t => t.id === parseInt(params.id))
>>>>>>> 5b9bd71a26e2be7bf1398cd05175928e38ec41e2:src/Containers/Services/Service.jsx

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
