import axios from "axios";

const USER_API_BASE_USER = "http://localhost:4000/publishers"

// const token = localStorage.getItem("jwtToken");

class PublisherService {
    getPublishers() {
        return axios.get(USER_API_BASE_USER);
    }

    getPublisherById(id) {
        return axios.get(USER_API_BASE_USER + '/' + id);
    }

    getPublisherByName(name) {
        return axios.get(USER_API_BASE_USER + '/name?name=' + name)
    }
}

export default new PublisherService()