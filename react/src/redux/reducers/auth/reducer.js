import {fromJS} from 'immutable';
import { combineReducers } from 'redux-immutable';
import typeActions from "./typeActions";


const initialState = fromJS({
    auth: {
        token: null,
        error: '',
    },
});


function Error(state = initialState.get('auth').get('error'), action = {}) {
    switch (action.type) {
        case typeActions.AUTH_LOGIN_ERROR:
            return action.payload;
        default:
            return state;
    }
}

function Data(state = initialState.get('auth').get('token'), action = {}) {
    switch (action.type) {
        case typeActions.AUTH_LOGIN_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
const Auth = combineReducers({
    Error,
    Data,
});

export default Auth;