import axios from "axios";
import authToke from "../utils/authToken";

const USER_API_BASE_USER = "http://localhost:4000/books"

const token =localStorage.getItem("jwtToken");

console.log(token);
if (token) {
    authToke(localStorage.jwtToken)
}

class BookService {
    getBooks(currentPage,bookPerPage) {
        currentPage -=1
        return axios.get(USER_API_BASE_USER+"?page="+currentPage+"&size="+bookPerPage);
    }

    getBooksById(id) {
        return axios.get(USER_API_BASE_USER + '/' + id);
    }

    geBooksByName(name) {
        return axios.get(USER_API_BASE_USER + '/name?name=' + name)
    }
    createBook(book){
        return axios.post(USER_API_BASE_USER,book,{
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    updateBook(id,book){
        return axios.put(USER_API_BASE_USER+"/update/"+id,book,{
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    getBookByAuthorId(id){
        return axios.get(USER_API_BASE_USER+'/authors/'+id);
    }


    getBookByGenresIds(ids){
        return axios.get(USER_API_BASE_USER+'/genres?ids='+ids.join(","))
    }

}

export default new BookService()