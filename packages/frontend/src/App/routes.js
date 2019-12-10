import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './screens/layouts/layout';

import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';

class Routes extends PureComponent {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={StudentList} />
          <Route path="/student/:id" component={StudentDetail} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
