import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Todos from './components/todos/Todos';
import Layout from './components/layout';
import CompletedTodos from './components/completedTodos/CompletedTodos';
import UnfinishedTodos from './components/unfinishedTodos/UnfinishedTodos';
import { Provider } from 'react-redux';
import { store } from './redux/rootReducer';
const App = () => {
  return (
    <Layout>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/completed' element={<CompletedTodos />} />
          <Route path='/unfinished' element={<UnfinishedTodos />} />
        </Routes>
      </Provider>
    </Layout>
  );
};

export default App;
