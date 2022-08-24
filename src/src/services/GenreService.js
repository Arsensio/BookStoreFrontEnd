import axios from "axios";

const USER_API_BASE_USER = "http://localhost:4000/genres"

// const token = localStorage.getItem("jwtToken");

class GenreService {
    getGenres() {
        return axios.get(USER_API_BASE_USER);
    }

    getGenreById(id) {
        return axios.get(USER_API_BASE_USER + '/' + id);
    }

    getGenreByName(name) {
        return axios.get(USER_API_BASE_USER + '/name?name=' + name)
    }
}

export default new GenreService()