import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { TodoApp } from './components/TodoApp';
import store  from './Redux/Store/Store'

function App() {
  return (
    <div className="App">
      <Provider store ={store}>
        <TodoApp/>
      </Provider>
    </div>
  );
}

export default App;
