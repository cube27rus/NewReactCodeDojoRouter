import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory,IndexRedirect} from 'react-router';

import App from './App';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import Shelf from './components/Shelf';
import Book from './components/Book';
import NotFound from './components/NotFound';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute  component={Home}/>
            <Route path="about" component={About}/>
            <Route path="books" component={Books}>
                <IndexRedirect to="/books/javascript"/>
                <Route path=":topic" >
                    <IndexRoute component={Shelf} />
                    <Route path=":slug" component={Book}/>
                </Route>
            </Route>            
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
    document.getElementById('root'));

