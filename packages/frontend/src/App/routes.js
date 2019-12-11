import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './screens/layouts/layout';

import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';
import Login from './components/Login';

class Routes extends PureComponent {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/students" component={StudentList} />
          <Route path="/student/:id" component={StudentDetail} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
