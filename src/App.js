import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/0.layout';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense>
          <Switch>
            <Route path="*" name="Welcome!" render={(props) => <Layout {...props} />} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    )
  }
}
