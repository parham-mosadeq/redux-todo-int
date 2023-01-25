import React from 'react';
import { useDispatch } from 'react-redux';
import {
  finishedTodo,
  editTodo,
  removeTodo,
} from '../../redux/todos/todosAction';
const TodoItems = ({ id, todoTxt, isDone, isEditing }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* cart title start*/}
      <article className='my-5 w-full rounded-sm bg-slate-100 p-1 border-t-2  '>
        {/* wrapper */}
        <div className='mt-5'>
          {/* info start */}
          <div>
            <p
              onDoubleClick={() => editTodo(id)}
              className={`w-full bg-stone-50 text-blue-800 capitalize text-center rounded-md
              ${
                isDone ? 'line-through bg-gray-200' : 'bg-stone-50 no-underline'
              }
              `}
            >
              {todoTxt}
            </p>
          </div>

          {/* btn start */}
          <div className='flex justify-center mx-3 my-4'>
            <button onClick={() => dispatch(removeTodo(id))}>❌</button>
            <button onClick={() => dispatch(finishedTodo(id))}>✔</button>
          </div>
          {/* btn end */}

          {/* info end */}
        </div>
        {/* wrapper */}
      </article>
      {/* cart title end*/}
    </div>
  );
};

export default TodoItems;
