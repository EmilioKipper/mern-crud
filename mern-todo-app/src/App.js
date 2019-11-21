import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";


function App() {
  return (
    <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
          <img src={'https://codingthesmartway.com/wp-content/uploads/2016/04/CTSWLogo03.png'} width="30" height="30" alt="CodingTheSmartWay.com" />
        </a>
        <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Todos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Todo</Link>
            </li>
          </ul>
        </div>
      </nav>
      <br/>
      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
    </div>
  </Router>
  );
}

export default App;
