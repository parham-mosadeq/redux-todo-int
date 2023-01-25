const addTodo = (e) => {
  e.preventDefault();
  return {
    type: 'ADD_TODO',
    // payload: txt,
  };
};
const getTodo = (txt) => {
  return {
    type: 'GET_TODO',
    payload: txt,
  };
};

const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    payload: id,
  };
};

const editTodo = (id) => {
  return {
    type: 'EDIT_TODO',
    payload: id,
  };
};

const finishedTodo = (id) => {
  return {
    type: 'DONE_TODO',
    payload: id,
  };
};

export { finishedTodo, editTodo, removeTodo, getTodo, addTodo };
