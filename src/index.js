import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import List from './components/list';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path='/list/:id' component={List}/>
  </Router>,
  document.getElementById('root')
);
