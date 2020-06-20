import React from 'react';
import PropTypes from 'prop-types'; // required import for webpack
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/search/Index';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);