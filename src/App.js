import React, { Component } from "react";
import { addTodo, removeTodo } from "./actions";
import { connect } from "redux-zero/react";
import "./App.css";
import { NavLink} from 'react-router-dom';

/*onClick={removeTodo}*/

const App = () => {
    return(
<div className="col-md-4">
<form>
    <div id="login-form" className="form-container">
    <div className="row">
        <div className="form-title">
            <h1><img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d"/></h1>
        </div>
    </div>
    <div className="input-container">
        <div className="row">
            <span className="req-input valid" >
                <span className="input-status" title="Input your email."> </span>
                <input type="email" data-min-length="8" placeholder="Email" required=""/>
            </span>
        </div>
        <div className="row">
            <span className="req-input confirm-password">
                <span className="input-status" data-toggle="tooltip" title="Password Must Match Initial Password Field."> </span>
                <input type="password" data-min-length="8" placeholder="Password" required=""/>
            </span>
        </div>  
        <div className="row submit-row">
            <NavLink to="/SignIn" className="btn btn-block submit-form">Sign In</NavLink>
        </div>
        <div class="row">
            <NavLink to="/SignUp" className="create-account">Create an Account </NavLink>
	</div>
    </div>
    </div>

    </form>
</div>
    );
}

export default App;
