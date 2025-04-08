import axios from 'axios'

export const client = axios.create({
    baseURL: "https://67f0c9ee2a80b06b8898a3a3.mockapi.io/users"
})

export const fanoAPI = axios.create({
    baseURL: "https://67ebb519aa794fb3222b4e2e.mockapi.io/MOCKAPI/EL2/products"
})

export const davidAPI = axios.create({
    baseURL: "https://67f0ca1e2a80b06b8898a418.mockapi.io/users"
})

