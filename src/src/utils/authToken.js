import axios from "axios";

export default function authToke(token){
    if (token!==null){
        axios.defaults.headers.common['Authorization']='Bearer_'+token;
    }else{
        console.log("here")
        delete axios.defaults.headers.common['Authorization']
    }
}
