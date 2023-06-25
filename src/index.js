import React from 'react';
import ReactDOM from 'react-dom/client';
import BoxList from './boxlist';
import TodoList from './todolist';

const App = () => (
  <div>
    <h1>Box List</h1>
    <h3>a list of color boxes</h3>
    <BoxList />
    <hr />
    <h1>ToDo App</h1>
    <h3>make a to do list</h3>
    <TodoList />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);