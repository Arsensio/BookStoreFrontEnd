import axios from "axios";
import authToke from "../utils/authToken";

const ORDER_API_BASE_USER = "http://localhost:4000/orders"

const token =localStorage.getItem("jwtToken");

console.log(token);
if (token) {
    authToke(localStorage.jwtToken)
}

class OrderService {

    getOrders(){
        return axios.get(ORDER_API_BASE_USER);
    }

    getById(id) {
        return axios.get(ORDER_API_BASE_USER + '/' + id);
    }

    postOrder(order){
        return axios.post(ORDER_API_BASE_USER,order,{
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    getAdminOrders(){
        return axios.get(ORDER_API_BASE_USER+'/admin/orders')
    }

    putStatus(id,status){
        return axios.put(ORDER_API_BASE_USER+'/update/admin/'+id,status,{
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    putOrder(id,order){
        return axios.put(ORDER_API_BASE_USER+'/update/'+id,order,{
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

}

export default new OrderService()