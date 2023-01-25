// ! dynamic id
import { v4 as uuidv4 } from 'uuid';
// * initial state
const initState = {
  todoTxt: '',
  // * todos array
  todos: [],
};

const { log, warn } = console;

export const todosReducer = (state = initState, action) => {
  switch (action.type) {
    // * get entered txt
    case 'GET_TODO':
      return {
        ...state,
        todoTxt: action.payload,
      };
    // * push it to specified array
    case 'ADD_TODO':
      if (state.todoTxt.trim()) {
        state.todos.push({
          id: uuidv4(),
          todoTxt: state.todoTxt,
          isDone: false,
          isEditing: false,
        });
      } else {
        warn('Input is empty');
      }
      return {
        ...state,
        todoTxt: '',
      };

    case 'REMOVE_TODO':
      const findItemToRemove = state.todos.filter(
        (item) => item.id !== action.payload
      );

      return { ...state, todos: findItemToRemove };

    case 'DONE_TODO':
      const findItemToFinish = state.todos.find((item) => {
        return item.id === action.payload;
        // log(item, 123);
        // return { find };
      });
      if (findItemToFinish.isDone) {
        findItemToFinish.isDone = false;
      } else {
        findItemToFinish.isDone = true;
      }

      return { ...state, todos: [...state.todos] };
    default:
      return initState;
  }
};
