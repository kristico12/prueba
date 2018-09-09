// utils
import {getCookie} from '../../../utils/cookies';
import typeActions from "./typeActions";

//Dispacher
function setLoginAuth(type, payload) {
    return {
        type,
        payload,
    }
}

//Actions
export function initAuth(dispatch) {
    const token = getCookie();
    return new Promise((resolve) => {
        if (token !== undefined) {
            dispatch({
                type: typeActions.AUTH_LOGIN_SUCCESS,
                payload: token,
            });
        }
        resolve(true);
    });

}