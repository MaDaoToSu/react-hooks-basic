import { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoList, setTodoList] = useState(
    [
      { id: 1, title: "title 1" },
      { id: 2, title: "title 2" },
      { id: 3, title: "title 3" },
    ]
  );

  // function father to passing for child 
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(p => p.id === todo.id);
    if (index < 0) return;

    // clone array to edit
    const newTodoList = [...todoList];
    newTodoList.splice(index);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(fromSubmit) {
    console.log("value is : ", fromSubmit);
    const newTodoList = [...todoList];
    const lst = {
      id: todoList.length + 1,
      ...fromSubmit,
    }
    newTodoList.push(lst);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>Welcome to React Hooks</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
