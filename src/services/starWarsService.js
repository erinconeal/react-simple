import axios from 'axios';

const baseUrl = 'http://swapi.co/api'
export function getPeople() {
    return axios.get(`${baseUrl}/people/`)
    .then(res => res.data.results);
}