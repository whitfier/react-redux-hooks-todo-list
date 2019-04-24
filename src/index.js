import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

render(
  <Provider store={store}>
    <TodoForm />
    <TodoList />
  </Provider>,
  document.getElementById('root'),
);
