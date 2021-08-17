import React from 'react';
import { TodoList } from './TodoList/TodoList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__sidebar">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
