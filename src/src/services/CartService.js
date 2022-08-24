import axios from "axios";
import authToke from "../utils/authToken";

const USER_API_BASE_USER = "http://localhost:4000/cart"

const token =' Bearer_'+localStorage.getItem("jwtToken");

if (localStorage.jwtToken) {
    console.log(localStorage.jwtToken)
    authToke(localStorage.jwtToken)
}

class CartService {
    getCart() {
        return axios.get(USER_API_BASE_USER,{
            headers:{
                'Authorization':token
            }
        });
    }
    delete(id){
        return axios.delete(USER_API_BASE_USER+'/'+id,{
            headers:{
                'Authorization':token
            }
        })
    }

    addToCart(cart){
        return axios.post(USER_API_BASE_USER,cart,{
            headers:{
                'Authorization':token,
                "Content-Type": "application/json"
            }
        });
    }

    deleteFromCart(){
        return axios.delete(USER_API_BASE_USER);
    }

}

export default new CartService()