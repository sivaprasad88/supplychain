import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "../actions/types";

const initialeState = { 
}


export default function( state =  initialeState , action){
    switch(action.type){
        case GET_ERRORS:
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}