import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/B3p01/vue-getting-started', 
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    }
}