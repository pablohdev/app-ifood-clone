import axios from `axios`;

const api = axios.create({
    BaseURL: 'https://www.google.com.br'
});


export default api 