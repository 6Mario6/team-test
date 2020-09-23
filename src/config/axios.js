import axios from 'axios';

const AxiosClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/6Mario6/mockjson/'
});

export default AxiosClient;