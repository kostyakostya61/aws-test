import React, {useState} from 'react';

const TodoList = ({title, id, checked}) => {
  const [cross, setCross] = useState(checked);

  return (
    <li>
      <span style={{textDecoration: cross ? 'line-through' : 'none'}}>{title}</span>
      <input type="checkbox" onChange={() => setCross(previous => !previous)} />
    </li>
  );
};

export default TodoList;
