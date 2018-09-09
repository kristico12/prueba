import {fromJS} from 'immutable';
import { combineReducers } from 'redux-immutable';
import typeActions from "./typeActions";
import { ConvertVecInmutableToObjectfull } from '../../../utils/InmmutableActions';
import { Map as map } from 'immutable';

const initialState = fromJS({
    book: {
        data: {},
        errors: {},
        success: {},
    },
});

function Error(state = initialState.get('book').get('errors'), action = {}) {
    switch (action.type) {
        case typeActions.BOOK_MESSAGE_ERROR:
            return action.payload;
        default:
            return state;
    }
}
function Data(state = initialState.get('book').get('data'), action = {}) {
    switch (action.type) {
        case typeActions.BOOK_LOAD:
            return ConvertVecInmutableToObjectfull(action.payload, 'id', state);
        case typeActions.BOOK_CREATE:
        case typeActions.BOOK_UPDATE:
            return state.set(action.payload.key, map(action.payload.data));
        case typeActions.BOOK_DELETE:
            return state.delete(action.payload.key);
        default:
            return state;
    }
}
function Success(state = initialState.get('book').get('success'), action = {}) {
    switch (action.type) {
        case typeActions.BOOK_MESSAGE_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

const Book = combineReducers({
    Data,
    Error,
    Success
});

export default Book;