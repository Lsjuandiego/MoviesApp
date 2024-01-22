import axios from "axios";

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key : '318d95f2039b8d11817823c2c6bdd1b9',
        language: 'es-ES'
    }
});

export default movieDB;