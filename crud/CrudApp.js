import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store'; //Import the store
import Router from './component/index' //Import the component file

export default class CrudApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}