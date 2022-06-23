const get = async (url) => {
  return await fetch(url).then(_handleResponse)
}

const post = async ({url, body, headers}) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      ...headers
    },
    credentials: 'include',
    body: JSON.stringify(body)
  }
  return await fetch(url, requestOptions).then(_handleResponse)
}

export const fetchwrapper = {
  get,
  post
}



// If you need to treat data each time you receive, you could do that here
const _handleResponse = (response) => {
  return response.text().then(res => {
    console.log('res', JSON.parse(res))
    const data = res && JSON.parse(res)
    console.log('data', data)
    return data
    // example
    // if(res.status === 200){
    //   return data
    // } else {
    //   return {message: 'There was a problem with the API'}
    // }
  })
}
