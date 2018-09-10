//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  as Router} from 'react-router-dom';
import {Provider} from "react-redux";

//store
import store from './src/redux/store';

//initStore
import { initAuth } from './src/redux/reducers/auth/actions';

// Routes
import { RouteInit } from './src/routes.jsx';


initAuth(store.dispatch).then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                {
                    RouteInit
                }
            </Router>
        </Provider>,
        document.getElementById('react')
    );

})
