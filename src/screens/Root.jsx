import React, { Component } from 'react';
//import { browserHistory } from 'react-router';
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScreensZoneForm from './Zone/Form';
import ScreensZoneList from './Zone/List';
import App from '../components/App';

const ScreensRoot = () => (
  <Router>
      <Switch>
        <Route path="/zone/list" component={ScreensZoneList} />
        <Route path="/zone/create" component={ScreensZoneForm} />
        <Route path="/zone/:id" component={ScreensZoneEdit} />
        <Route path="/" component={App} />
      </Switch>
  </Router>
);

export default ScreensRoot;