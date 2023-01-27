import React from 'react';
import { useSelector } from 'react-redux';
import TodoItems from '../shared/TodoItems';
const UnfinishedTodos = () => {
  const unfinishedTodos = useSelector((state) => state.todosState.todos);
  return (
    <div className='max-w-screen w-full my-10'>
      {unfinishedTodos.map((item) => {
        if (!item.isDone) {
          const { id } = item;
          return (
            <React.Fragment key={id}>
              <TodoItems {...item} />
            </React.Fragment>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default UnfinishedTodos;
