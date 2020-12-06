import React from 'react';
import Slider from '@/components/layouts/ingame/Slider';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from '@/modules';

const store = createStore(rootReducer, composeWithDevTools());

export default {
  title: 'Slider',
  component: Slider,
};

export const Default = () => (
  <Provider store={store}>
    <Slider />
  </Provider>
);
