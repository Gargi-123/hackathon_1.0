import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewForm from "./newForm";
import ExistingData from "./existingData";

import { AppContext } from "../context/ContextProvider";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    return (
      <div className="container">
        {this.context.state_type === null ? (
          <div>
            <button
              name="newForm"
              onClick={this.context.selectMode}
              className="btn btn-warning"
            >Start With New Form</button>
            <hr />
            <button
              name="existingForm"
              onClick={this.context.userSelect}
              className="btn btn-warning"
            >Generate Documents with Existing Data</button>
          </div>
        ) : this.context.state_type === "newForm" ? (
          <NewForm />
        ) : (
          <ExistingData />
        )}
      </div>
    );
  }
}

export default DashBoard;

DashBoard.contextType = AppContext;