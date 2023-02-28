import axios from 'axios';

export const api = axios.create({
    baseUrl: 'https://api.unsplash.com/',
    headers: {
        Authorization: "Client-ID Fy6f1wWGZu1MO18iqEMB6EqZAd5-wQ_sz_unRZd6Jzw"
    }
})

export default api;