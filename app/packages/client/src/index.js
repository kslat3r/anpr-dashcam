import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import Layout from './containers/layout/Layout';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Layout />
  </Provider>,
  document.getElementById('root')
);
