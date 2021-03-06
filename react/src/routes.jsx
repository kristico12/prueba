// Dependencies
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getCookie } from './utils/cookies';
import store from './redux/store';

//views
import Dasboard from './views/dasboard.jsx';
import Login from './views/login.jsx';
import Book from './views/book/index.jsx'

const notRequireAuth = component => (store.getState().get('Auth').get('Data') !== null  ? <Redirect to="/" /> : component);
const requireAuth = component => (store.getState().get('Auth').get('Data') !== null ? component : <Redirect to='/login'/>);

export const RouteInit = (
    <Switch>
        <Route path="/login" render={() => notRequireAuth(<Login />)} />
        <Route path="/404" render={() => <h1>NOTFOUND</h1>} />
        <Route path="/" render={() => requireAuth(<Dasboard />)}/>
    </Switch>
)
export const RouteMenu = (
    <Switch>
        <Route exact path="/" component={Book} />
        <Redirect to="/404" />
    </Switch>
)