import React from "react";
import axios from 'axios'
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
      <div >
        <h2>
        Powered by RevvSales
        </h2>
      </div>
      <div>

        <form>
        <label>UserName:</label>
          <input
            name="email"
            type = "text"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            name="password"
            type = "text"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label>Org Domain:</label>
          <input
            name="org_domain"
            type = "text"
            value={this.state.org_domain}
            onChange={this.handleChange}
          />
          <input type="button" value="SUBMIT"  onClick={(e) => this.context.authUser(this.state.email,this.state.password,this.state.org_domain,e)}/>
        </form>
      </div>
      </>
    );
  }
}

Login.contextType = AppContext;

// onClick={(e) => this.context.automate(this.state.email,this.state.password,e) }