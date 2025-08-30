import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '3b9c48baaed6669820c2181117da194a',
    language: 'pt-BR',
    page: 1,
  },
})

export default api
