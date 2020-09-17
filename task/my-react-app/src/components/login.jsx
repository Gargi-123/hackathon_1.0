import React from "react";
import { AppContext } from "../context/ContextProvider";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
          <input type="button" value="SUBMIT" onClick={(e) => this.context.authUser(this.state.email,this.state.password,e)} />
        </form>
      </div>
      </>
    );
  }
}

Login.contextType = AppContext;
