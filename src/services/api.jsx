// baseUrl https://api.themoviedb.org/3/
//url da api movie/now_playing?api_key=ac34961adfee350be9603c85ac147dcc&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/"
})

export default api;
