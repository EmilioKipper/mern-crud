import React, { useState } from "react";
import axios from "axios";

export default function CreateTodo(props) {
  const [todo_description, setTodo_description] = useState("");
  const [todo_responsible, setTodo_responsible] = useState("");
  const [todo_priority, setTodo_priority] = useState("");
  const [todo_completed, setTodo_completed] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${todo_description}`);
    console.log(`Todo Responsible: ${todo_responsible}`);
    console.log(`Todo Priority: ${todo_priority}`);

    const newTodo = {
      todo_description: todo_description,
      todo_responsible: todo_responsible,
      todo_priority: todo_priority,
      todo_completed: todo_completed
    };

    axios
      .post("http://localhost:4000/todos/add", newTodo)
      .then(res => console.log(res.data));

    setTodo_description("");
    setTodo_responsible("");
    setTodo_priority("");
    setTodo_completed(false);
  }

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Create New Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            value={todo_description}
            onChange={e => setTodo_description(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            value={todo_responsible}
            onChange={e => setTodo_responsible(e.target.value)}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={todo_priority === "Low"}
              onChange={e => setTodo_priority(e.target.value)}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={todo_priority === "Medium"}
              onChange={e => setTodo_priority(e.target.value)}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={todo_priority === "High"}
              onChange={e => setTodo_priority(e.target.value)}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
