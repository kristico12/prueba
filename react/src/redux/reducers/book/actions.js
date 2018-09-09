// utils
import typeActions from "./typeActions";
import { VecInmutable } from '../../../utils/InmmutableActions';
import Model from './model';
import store from '../../store';

// Dispacher
function setBookDispacth(type, payload) {
    return {
        type,
        payload,
    }
}

// Actions
function AlertError(data) {
    return (dispatch) => {
        dispatch(
            setBookDispacth(
                typeActions.BOOK_MESSAGE_ERROR,
                data
            )
        )
    }
}
function AlertSuccess(data) {
    return (dispatch) => {
        dispatch(
            setBookDispacth(
                typeActions.BOOK_MESSAGE_SUCCESS,
                data
            )
        )
    }
}
function BookLoad() {
    return (dispatch) => {
        //Simulate call
        const data = {};
        data.count = store.getState().get('Book').get('Data').get('count');
        data.array = VecInmutable(Model, []);
        dispatch(
            setBookDispacth(
                typeActions.BOOK_LOAD,
                data
            )
        )
    }
}
function BookCreate(data) {
    return (dispatch) => {
        //Simulate call
        const object = data;
        object.key = data.id;
        object.data = data;
        dispatch(
            setBookDispacth(
                typeActions.BOOK_CREATE,
                object
            )
        );
    }
}
function BookUpdate(data) {
    return (dispatch) => {
        //Simulate call
        const object = data;
        object.key = data.id;
        object.data = data;
        dispatch(
            setBookDispacth(
                typeActions.BOOK_UPDATE,
                object
            )
        );
    }
}


export default {
    BookLoad,
    BookCreate,
    BookUpdate,
    AlertError,
    AlertSuccess,
}