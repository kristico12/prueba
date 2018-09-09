import {Cookies} from 'react-cookie';

const cookies = new Cookies();

const name = 'setionPruebaName';

const expired = (days) =>  {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
}
const getCookie = () => cookies.get(name);
const setCookie = (value, days) => cookies.set(name, value, {expires: expired(days)});
const remove = () => cookies.remove(name);

export {
    getCookie,
    setCookie,
    remove
}