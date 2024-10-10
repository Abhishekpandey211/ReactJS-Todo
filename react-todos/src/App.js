import React, {useState}from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [showAddTodoForm, setshowTodoForm] = useState (false);

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription : 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription : 'Water Plants', rowAssigned: 'User two'},
    {rowNumber: 3, rowDescription : 'Make Dinner', rowAssigned: 'User three'},
    {rowNumber: 4, rowDescription : 'charge phone battery', rowAssigned: 'User four'}
  ]
)
  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if(todos.length >0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }else{
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription : description,
        rowAssigned: assigned
      };
      // todos.push(newTodo);
      setTodos(todos => [...todos, newTodo])
      // console.log(todos);
    }
    const deleteTodo = (deleteTodoRowNumber) => {
      let filtered = todos.filter(function (value){
        return value.rowNumber !== deleteTodoRowNumber;
      });
      setTodos(filtered);
    }
    
  
  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
         It's  My Todo's
        </div>
        <div className="card-body">
        <TodoTable todos={todos} deleteTodo = {deleteTodo}/>
        <button onClick={() => setshowTodoForm(!showAddTodoForm)}className="btn btn-primary">
          {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
        </button>
        {showAddTodoForm && 
          <NewTodoForm addTodo={addTodo}/>
        }
        
        </div>
      </div>
    </div> 
  );
}
export default App;