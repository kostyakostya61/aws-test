import React, {useState} from 'react';
import TodoList from './todo-list';

const Container = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const addTodo = () => {
    return (
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: title,
          checked: false
        }
      ]),
      setTitle('')
    );
  };

  return (
    <div>
      <div>
        <input
          placeholder="Enter ur todo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        ></input>
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        {todos.map(todo => {
          return (
            <TodoList
              key={todo.id}
              title={todo.title}
              id={todo.id}
              checked={todo.checked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Container;
