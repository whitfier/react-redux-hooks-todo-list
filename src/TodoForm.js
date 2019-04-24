import React from 'react';
import { useActions } from 'react-redux';

import { addTodo } from './actions';

const TodoList = () => {
  const [todoText, setTodotext] = React.useState('');
  const add = useActions(addTodo, []);

  const onSubmitTodo = e => {
    e.preventDefault();
    add(todoText);
    setTodotext('');
  };

  return (
    <form onSubmit={onSubmitTodo}>
      <input value={todoText} onChange={e => setTodotext(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TodoList;
