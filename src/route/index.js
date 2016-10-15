import React from 'react';

import { IndexRoute, Route } from 'react-router';

import Layout from 'layout';

import Home from 'view/home';
import NotFound from 'view/not-found';
import Register from 'view/register';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/register" component={Register} />
    <Route path="*" component={NotFound} />
  </Route>
);
