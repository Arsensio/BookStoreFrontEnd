import axios from "axios";

const USER_API_BASE_USER = "http://localhost:4000/authors"


class AuthorService {
    getAuthors(currentPage,bookPerPage) {
        currentPage -=1;
        return axios.get(USER_API_BASE_USER+"?page="+currentPage+"&size="+bookPerPage);
    }

    getAuthorsById(id) {
        return axios.get(USER_API_BASE_USER + '/' + id);
    }

    geAuthorsByName(name) {
        return axios.get(USER_API_BASE_USER + '/name?name=' + name)
    }
}

export default new AuthorService()