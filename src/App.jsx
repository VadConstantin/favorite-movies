import React, { useState, useCallback, useMemo, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from 'Components/Navbar/Navbar'
import { Service, Services } from 'Containers/Services'
import { Home } from 'Containers/Home'
import { Theme } from './Utilities'
import { servicesService } from 'Utilities/services.service'

// initializing the context ThemeContext
export const MainContext = React.createContext({
  theme: Theme.dark,
  toggleTheme: () => {},
  services: [],
});

function App() {
  const [services, setServices ] = useState([])
  const [themeValue, setThemeValue ] = useState(Theme.light)

  // toggling theme value
  const toggleTheme = useCallback(() => {
    setThemeValue(t => t === Theme.dark ? Theme.light : Theme.dark)
  }, [])

  // creating the final value to pass to the provider
  const value = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme,
      services,
    }
  }, [themeValue, services, toggleTheme])

  // fetching data from API and setting 'services' value
  // Don't need to add URL as a dependency as it is a non-changing variable
  useEffect(() => {
    servicesService.getServicesData()
    .then(setServices)
    // no need to break down .then(data => setServices(data)) as the function will automatically be passed the value
    // returned by the function above
  }, [])

  return (
    <MainContext.Provider value={value}>
      <Navbar/>
      <div style={value.theme}>
        <Routes>
          <Route path="/" element={<Home services={services} />}/>
          <Route path="/services" element={<Services services={services} />} />
          <Route path="/services/:id" element={<Service services={services}/>} />
        </Routes>
      </div>
    </MainContext.Provider>
  );
}

export default App;
