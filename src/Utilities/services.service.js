const { fetchwrapper } = require("./fetchwrapper")

// you could add a paramter which you could interpollate into the URL if you wanted
// to allow user to choose the limit (for example)
const getServicesData = () => {
  return fetchwrapper.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
}

export const servicesService = {
  getServicesData
}
