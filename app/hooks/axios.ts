import axios from 'axios'

enum Endpoints {
  TEMP = '/temp' 
}

export default function useAxios () {
  const api = axios.create({
    baseURL: 'https://temperatures-server-production.up.railway.app',
    timeout: 5000
  })

  api.interceptors.response.use(response => {
    response.data = {
      count: parseInt(response.headers['x-total-count']),
      items: response.data
    }

    return response
  }, err => Promise.reject(err)
  )

  return { api, Endpoints }
}
