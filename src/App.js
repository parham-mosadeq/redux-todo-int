import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Todos from './components/todos/Todos';
import Layout from './components/layout';
import CompletedTodos from './components/completeTodos/CompletedTodos';
import UnfinishedTodos from './components/unfinishedTodos/UnfinishedTodos';
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Todos />} />
        <Route path='/completed' element={<CompletedTodos />} />
        <Route path='/unfinished' element={<UnfinishedTodos />} />
      </Routes>
    </Layout>
  );
};

export default App;
