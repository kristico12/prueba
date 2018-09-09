// Dependencies
import {combineReducers} from 'redux-immutable';

//Reducers
import Auth from './reducers/auth/reducer';
import Book from './reducers/book/reducer';


const store = combineReducers({
    Auth,
    Book,
})

export default store;