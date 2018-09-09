// Dependencies
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import store from './src/redux/store';

//views
import Login from './src/views/dasboard.jsx';
import Dasboard from './src/views/login.jsx';

const notRequireAuth = component => (store.getState().get('Auth').get('data') !== null  ? <Redirect to="/" /> : component);
const requireAuth = component => (store.getState().get('Auth').get('data') !== null ? component : <Redirect to='/login'/>);

export const RouteInit = (
    <Switch>
        <Route path="/login" render={() => notRequireAuth(<Login />)} />
        <Route path="/404" render={() => <h1>NOTFOUND</h1>} />
        <Route path="/" render={() => requireAuth(<Dasboard />)}/>
    </Switch>
)
