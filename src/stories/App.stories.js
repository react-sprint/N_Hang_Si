import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '@/modules';
import App from '@/App';

const store = createStore(rootReducer);

export default {
  title: 'App',
  component: App,
};

export const Basic = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
