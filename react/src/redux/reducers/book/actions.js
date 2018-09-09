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

export default {
    BookLoad,
}