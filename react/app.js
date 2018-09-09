//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";

//store
import store from './src/redux/store';

//initStore
import { initAuth } from './src/redux/reducers/auth/actions';

// Routes
import { RouteInit } from './routes.jsx';

initAuth(store.dispatch).then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                {
                    RouteInit
                }
            </BrowserRouter>
        </Provider>,
        document.getElementById('react')
    );

})
