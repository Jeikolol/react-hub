import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5a21fd9d89554adfbd5505bfe7c7aa10'
    }
})