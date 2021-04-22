import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://reqres.in'
})

export default clienteAxios;