import { ADD_TODO, REMOVE_TODO } from './actions';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((value, index) => index !== action.payload);
    default:
      return state;
  }
};

export default todosReducer;
