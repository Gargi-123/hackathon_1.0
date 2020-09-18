import React from "react";
import axios from 'axios'
import Styles from "./form.module.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { AppContext } from "../context/ContextProvider";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      org_domain: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (

      <>
      <div  className={`container border mt-4 p-4 col-4 ${Styles.color}`}>
        <h2 class="font-weight-bold text-center">
          Powered by RevvSales
        </h2>
      {/* </div>
      <div className="container"> */}
        <div style={{width:"400px",margin:"auto"}}>
        <form>
        <label>UserName:</label>
          <input
            name="email"
            type = "text"
            value={this.state.user}
            class="form-control"
            onChange={this.handleChange}
          ></input>
          <label>Password:</label>
          <input
            name="password"
            type = "password"
            class="form-control" 
            value={this.state.password}
            onChange={this.handleChange}
          ></input>
          <label>Org Domain:</label>
          <input
            name="org_domain"
            type = "text"
            class="form-control" 
            value={this.state.org_domain}
            onChange={this.handleChange}
          ></input>
          <br/>
          <input type="button" value="SUBMIT" class="btn btn-primary btn-lg btn-block"  onClick={(e) => this.context.authUser(this.state.email,this.state.password,this.state.org_domain,e)}></input>
          
        </form>
        </div>
      </div>
      </>
    );
  }
}

Login.contextType = AppContext;

// onClick={(e) => this.context.automate(this.state.email,this.state.password,e) }