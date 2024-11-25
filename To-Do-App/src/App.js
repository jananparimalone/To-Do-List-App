import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import ViewTodo from "./components/view-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./logo.svg";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                        </a>
                        <Link to="/" className="navbar-brand">Mayhew Movie App</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Movies</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Add Movie</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <Route path="/" exact component={TodosList} />
                    <Route path="/view/:id" exact component={ViewTodo} />

                    <Route path="/create" component={CreateTodo} />
                </div>
            </Router>
        );
    }
}

export default App;