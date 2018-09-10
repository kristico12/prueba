// utils
import { getCookie, setCookie } from '../../../utils/cookies';
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
        try {
            if (token !== undefined) {
                dispatch(
                    setLoginAuth(
                        typeActions.AUTH_LOGIN_SUCCESS,
                        token,
                    )
                );
            }            
        } finally {
            resolve(true);
        }
    });
}
function AlertError(data) {
    return (dispatch) => {
        dispatch(
            setLoginAuth(
                typeActions.AUTH_LOGIN_ERROR,
                data
            )
        )
    }
}
function SingIn(data, session) {
    return (dispatch) => {
        // simulate backend
        if (data) {
            if (session) {
                setCookie(data.password, 1)
            }
            dispatch(
                setLoginAuth(
                    typeActions.AUTH_LOGIN_SUCCESS,
                    data.password
                )
            )
        } else {
            dispatch(
                setLoginAuth(
                    typeActions.AUTH_LOGIN_ERROR,
                    'Credenciales Invalidas'
                )
            )
        }
    }
}

export default {
    AlertError,
    SingIn
}