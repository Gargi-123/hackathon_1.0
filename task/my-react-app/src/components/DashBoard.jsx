import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewForm from "./newForm";
import ExistingData from "./existingData";

import { AppContext } from "../context/ContextProvider";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state_type: null,
    };
  }

  userSelect = (e) => {
    this.setState({
      state_type: e.target.name,
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.state_type == null ? (
          <div>
            <button
              name="newForm"
              onClick={this.userSelect}
              className="btn btn-warning"
            >Start With New Form</button>
            <hr />
            <button
              name="existingForm"
              onClick={this.userSelect}
              className="btn btn-warning"
            >Generate Documents with Existing Data</button>
          </div>
        ) : this.state.state_type == "newForm" ? (
          <NewForm />
        ) : (
          <ExistingData />
        )}
      </div>
    );
  }
}

export default DashBoard;
