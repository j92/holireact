import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './containers/dashboard';
import Contracts from './containers/contracts';
import Holidays from './containers/holidays';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/contracts" component={Contracts}/>
            <Route path="/holidays" component={Holidays}/>
        </Route>
    </Router>
), document.getElementById('root'));