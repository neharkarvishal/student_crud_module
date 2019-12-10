import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './store';
import Routes from './routes';

/* Main Component */
export default class CrudApp extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </Provider>
    );
  }
}
