import axios from 'axios'

export default function useAxios () {
  const api = axios.create({
    baseURL: 'https://temperatures-server-production.up.railway.app',
    timeout: 1000
  })

  return { api }
}
