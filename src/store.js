import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {}; 

const middileware = [thunk]; 

const store = createStore( rootReducer , initialState  , applyMiddleware( ...middileware) );

export default store;
