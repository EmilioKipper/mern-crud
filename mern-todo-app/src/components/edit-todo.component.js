import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EditTodo(props) {
  const [todo_description, setTodo_description] = useState("");
  const [todo_responsible, setTodo_responsible] = useState("");
  const [todo_priority, setTodo_priority] = useState("");
  const [todo_completed, setTodo_completed] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/todos/" + props.match.params.id)
      .then(response => {
        this.setState({
          todo_description: response.data.todo_description,
          todo_responsible: response.data.todo_responsible,
          todo_priority: response.data.todo_priority,
          todo_completed: response.data.todo_completed
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    const obj = {
      todo_description: todo_description,
      todo_responsible: todo_responsible,
      todo_priority: todo_priority,
      todo_completed: todo_completed
    };
    console.log(obj);
    axios
      .post(
        "http://localhost:4000/todos/update/" + props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    props.history.push("/");
  }
  return (
    <div>
      <h3 align="center">Update Todo</h3>
      <form onSubmit={e => onSubmit(e)}>
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
            onChange={e =>setTodo_responsible(e.target.value)}
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
              onChange={e =>setTodo_priority(e.target.value)}
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
              onChange={e =>setTodo_priority(e.target.value)}
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
              onChange={e =>setTodo_priority(e.target.value)}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            id="completedCheckbox"
            type="checkbox"
            name="completedCheckbox"
            onChange={e =>setTodo_completed(e.target.value)}
            checked={todo_completed}
            value={todo_completed}
          />
          <label className="form-check-label" htmlFor="completedCheckbox">
            Completed
          </label>
        </div>

        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
