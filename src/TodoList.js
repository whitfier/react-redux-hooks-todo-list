import React from 'react';
import { useSelector, useActions } from 'react-redux';

import { removeTodo } from './actions';

const TodoList = () => {
  const todos = useSelector(todos => todos);
  const remove = useActions(removeTodo, []);

  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>
          {todo}
          <button onClick={() => remove(i)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
