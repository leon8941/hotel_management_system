export const get = (url) => {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}

export const post = (url, payload = {}) => {
  const headers = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }
  
  return fetch(url, headers)
    .then(response => response.json())
    .catch(error => console.log(error))
}

export const put = (url, payload = {}) => {
  const headers = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }
  
  return fetch(url, headers)
    .then(response => response.json())
    .catch(error => console.log(error))
}

export const destroy = (url) => {
  const headers = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  return fetch(url, headers)
    .then(response => response.json())
    .catch(error => console.log(error))
}