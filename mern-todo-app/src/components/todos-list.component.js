import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Todo = props => (
  <tr>
      <td>{props.todo.todo_description}</td>
      <td>{props.todo.todo_responsible}</td>
      <td>{props.todo.todo_priority}</td>
      <td>
          <Link to={"/edit/"+props.todo._id}>Edit</Link>
      </td>
  </tr>
)

export default function TodosList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/todos/')
    .then(response => {
        setTodos({ todos: response.data });
    })
    .catch(function (error){
        console.log(error);
    })
  }, [])
  function todoList(){
    if(todos.todos) return todos.todos.map(function(currentTodo, i){
      return <Todo todo={currentTodo} key={i} />;
  })
  }
  return (
    <div>
    <h3>Todos List</h3>
    <table className="table table-striped" style={{ marginTop: 20 }} >
        <thead>
            <tr>
                <th>Description</th>
                <th>Responsible</th>
                <th>Priority</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            { todoList() }
        </tbody>
    </table>
</div>
  );
}
