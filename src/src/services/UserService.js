
import axios from "axios";
import authToke from "../utils/authToken";

const USER_API_BASE_USER = "http://localhost:4000/users"

const token  =localStorage.getItem("jwtToken");

if (token){
    authToke(token)
}


class UserService{
    getUsers(){
        return axios.get(USER_API_BASE_USER+'/admin/users');
    }
    createUser(user){
        return axios.post(USER_API_BASE_USER,user,{
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    getUserById(id){
        console.log(id)
        return axios.get(USER_API_BASE_USER+'/'+id);
    }
    blockUser(user,id){
        return axios.put(USER_API_BASE_USER+'/update/admin/role/'+id,user,{
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

}

export default new UserService()