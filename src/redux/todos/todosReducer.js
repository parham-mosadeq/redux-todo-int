import { v4 as uuidv4 } from 'uuid';
// * initial state
const initState = {
  todoTxt: '',
  // * todos array
  todos: [],

  isEditing: false,
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
      const findEdited = state.todos.filter((item) => item.isEditing === true);
      if (state.isEditing && state.todoTxt.trim()) {
        return {
          ...state,
          todoTxt: '',
          todos: state.todos.map((item) => {
            if (item.id === findEdited[0].id) {
              const mod = { ...item, todoTxt: state.todoTxt, isEditing: false };
              return mod;
            }
            return { ...state.todos, ...item };
          }),
          isEditing: false,
        };
      } else if (state.todoTxt.trim()) {
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
      });
      const s = state.todos.find((item) => {
        return item.id === action.payload;
      });
      log(s);
      if (findItemToFinish.isDone) {
        findItemToFinish.isDone = false;
      } else {
        findItemToFinish.isDone = true;
      }

      return { ...state, todos: [...state.todos] };

    case 'EDIT_TODO':
      const getItem = state.todos.filter((item) => item.id === action.payload);
      getItem[0].isEditing = true;
      return {
        ...state,
        todoTxt: getItem[0].todoTxt,
        isEditing: true,
      };
    default:
      return initState;
  }
};
