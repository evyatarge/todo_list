import React, { Component } from 'react';
import './App.css';

import ToDoList from "./ToDoList";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 className='title'>My TODO list</h1>
        <div><ToDoList/></div>
      </div>
    );
  }
}

export default App;
