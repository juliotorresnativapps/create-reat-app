import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Root from './app/Root';

import { history } from './app/history';
import Redbox from 'redbox-react';
import configureStore from './app/store/configureStore';

import 'sweetalert/dist/sweetalert.min.js';
//import 'sweetalert/src/sweetalert.css';
const store = configureStore();

// Get the DOM Element that will host our React application
const rootEl = document.getElementById('app');

class Index extends Component {
    render() {
        return (
            <Root store={store} history={history} />
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));