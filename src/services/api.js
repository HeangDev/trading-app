import axios from "axios";

const API_KEY = 'CKKQ8PA9APAWYSAQJCKD';
const API_SECRET = 'nkG1eD6R07coRvEHKBlUCaghaBB1uQQqPpoEaHsZ';
const BASE_URL = 'https://api.alpaca.markets';

const alpacaService = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'APCA-API-KEY-ID': API_KEY,
        'APCA-API-SECRET-KEY': API_SECRET,
    },
})

export default alpacaService