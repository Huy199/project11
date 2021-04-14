import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import './App.css';
import Menu from './components/Menu';
import routes from './components/routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          {/* Menu */}
          <Menu />
          {/* Noidung */}
          <Switch>{this.showContentMenus(routes)}</Switch>
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };
}

export default App;
