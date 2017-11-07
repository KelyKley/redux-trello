import React, { Component } from "react";
import { addTodo } from "./actions";
import { connect } from "redux-zero/react";
import "./App.css";
import { NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
      <div id="k-nav">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <h1 className="navbar-brand navi">
                <img
                  alt="Brand"
                  src="https://a.trellocdn.com/images/50b4ebc64391dc394a38e73aed57f0e2/header-logo.png"/>
              </h1>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  const FormOne = ({ todos }) => {
    const Comment = todos.map(todo => (
      <div className="comment">
        <li key={todo.id}>
          <span className="userName">{todo.user}</span>
          <button type="submit" name="submit" value="submit">
            Delete
          </button>
        </li>
      </div>
    ));
  
    const onSubmit = e => {
      e.preventDefault();
      addTodo(this.comment.value);
    };
  
    return (
  <div>
        <NavBar/>
      <div className="wrapper">
        <header>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Comment"
              ref={e => (this.comment = e)}
            />
            <button type="submit" name="submit" value="submit">
              POST COMMENT
            </button>
          </form>
        </header>
        <div className="main">
          <ul className="col-md-3" id="invitedList">{Comment}</ul>
        </div>
      </div>
      </div>
    );
  };
  
  const mapToProps = ({ todos }) => ({ todos });
  
  export default connect(mapToProps)(FormOne);
  
  