import React from 'react';
import { useSelector } from 'react-redux';
import TodosItem from '../shared/TodoItems';
const CompletedTodos = () => {
  const completedTodos = useSelector((state) => state.todosState);

  return (
    <div className='max-w-screen w-full my-10'>
      {completedTodos.todos.map((item) => {
        if (item.isDone) {
          const { id } = item;
          return (
            <React.Fragment key={id}>
              <TodosItem {...item} />
            </React.Fragment>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default CompletedTodos;
