// Dependencies
import {combineReducers} from 'redux-immutable';

//Reducers
import Auth from './reducers/auth/reducer';

const store = combineReducers({
    Auth
})

export default store;