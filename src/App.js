import React from 'react';
import RoutesComponent from './shared/routes/RoutesComponent';
import store from './redux/store';
import { Provider } from 'react-redux';

export default function App() {

  return (
    <React.Fragment>
      <Provider store={store}>
        <RoutesComponent />
      </Provider>
    </React.Fragment>
  )
}