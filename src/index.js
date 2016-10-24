import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import MainPage from './components/MainPage';
import NewBlog from './components/NewBlog';


render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={MainPage} />
      <Route path='newblog' component={NewBlog} />
    </Route>
  </Router>,
  document.getElementById('root')
);
