import React, { useState } from 'react';
import './Todos.css';
import Container from 'react-bootstrap/Container';


const Todos = () => {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleEditInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleClick = () => {
    if (value !== '') {
      setTodo([...todo, value]);
      setValue('');
    }
  };

  const handleDelete = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(todo[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedTodo = [...todo];
    updatedTodo[index] = editValue;
    setTodo(updatedTodo);
    setEditIndex(null);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  return (
    
    
    <div className="hello">
         
      <h1>THINGS TO DO</h1>
      <input value={value} onChange={handleInputChange} />
      <button onClick={handleClick}>Add to list</button>
      <div>
        <ol>
          {todo.map((todoItem, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    value={editValue}
                    onChange={handleEditInputChange}
                  />
                  <button onClick={() => handleSaveEdit(index)}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <><div className='helloman' >
                  {todoItem}  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => handleEdit(index)}>Update</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Todos;
