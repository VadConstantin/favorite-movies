import React, { useState, useEffect, useLayoutEffect, useContext } from 'react'
import Cards  from 'Components/Cards/Cards'
import { ThemeContext } from 'App'

const Home = () => {

  const [ services, setServices ] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/photos?_limit=20'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setServices(data)
      })
  }, [url])

  return(
    <div>
      <Cards services={services} />
    </div>
  )
}

export default Home
