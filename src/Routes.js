import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Pages/kibum/Login/Login';
import Main from './Pages/kibum/Main/Main';

import LoginHr from './Pages/hyerin/Login/Login';
import MainHr from './Pages/hyerin/Main/Main';

import LoginSy from './Pages/saeyoung/Login/Login';
import MainSy from './Pages/saeyoung/Main/Main';

import LoginYs from './Pages/yusin/Login/Login';
import MainYs from './Pages/yusin/Main/Main';

import LoginSg from './Pages/sugyeong/Login/Login';
import MainSg from './Pages/sugyeong/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/LoginHr" component={LoginHr} />
          <Route exact path="/MainHr" component={MainHr} />
          <Route exact path="/LoginSy" component={LoginSy} />
          <Route exact path="/MainSy" component={MainSy} />
          <Route exact path="/LoginYs" component={LoginYs} />
          <Route exact path="/MainYs" component={MainYs} />
          <Route exact path="/LoginSg" component={LoginSg} />
          <Route exact path="/MainSg" component={MainSg} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
