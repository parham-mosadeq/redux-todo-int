import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { uuid } from 'uuidv4';
import { getTodo, addTodo } from '../../redux/todos/todosAction';
import TodoItems from './TodoItems';
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const isEditing = useSelector((state) => state.todos.isEditing);
  const todosArr = useSelector((state) => state.todos.todos);
  console.log(todos);
  // console.log(todosArr);
  const dispatch = useDispatch();
  return (
    <main className='min-h-screen mt-10 w-screen max-w-lg'>
      <div className='bg-slate-50 shadow-2xl p-6 min-h-full min-w-full my-5'>
        <form
          onSubmit={(e) => dispatch(addTodo(e))}
          className='flex items-center justify-center mt-10 rounded-md bg-slate-50'
        >
          <div className='self-start'>
            <input
              onChange={(e) => dispatch(getTodo(e.target.value))}
              value={todos.todoTxt}
              type='text'
              className='
            rounded-l-lg
            text-center tracking-wider shadow-md py-4 px-2 capitalize
            active:outline-none
            focus:outline-none
            '
              placeholder='enter a todo'
            />
            <button
              className=' py-4 px-2 capitalize bg-blue-500 text-white 
          rounded-r-lg hover:cursor-pointer'
            >
              {!isEditing ? 'add' : 'edit'}
            </button>
          </div>
        </form>
        <>
          {todosArr ? (
            todosArr.map((item) => (
              // console.log(item.id)
              <span key={item.id}>
                <TodoItems {...item} />
              </span>
            ))
          ) : (
            <h3>loading...</h3>
          )}
        </>
      </div>
    </main>
  );
};

export default Todos;
