import axios from "axios";

const http = axios.create({
    baseURL: `https://api.binance.com/`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true
})

export default http