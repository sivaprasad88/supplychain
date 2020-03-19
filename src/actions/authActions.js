import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

 
export const doRegister = (userData, history) => (dispatch) => {   
    axios.post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch ( err => {
        console.log(err.response.data);
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
};