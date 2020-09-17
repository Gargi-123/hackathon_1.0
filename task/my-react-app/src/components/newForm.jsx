import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./form";
import { AppContext } from "../context/ContextProvider";
export default class NewForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  

  render() {
    return (
      <div className="container">
        {this.context.all_done ? (
          <Form/>
        ) : (
          <>
            {this.context.isFormSubmitted ? (
              <>
                <p>Step 1 completed</p>
                <p>Form Created</p>
              </>
            ) : (
              <>
                {" "}
                <p>CREATE A NEW GOOGLE FORM</p>
                <a
                  href={"https://docs.google.com/forms/u/0/"}
                  className="btn btn-primary"
                >
                  GO TO GOOGLE FORM
                </a>
                <br />
                <p>PLEASE GIVE THE LINK OF GOOGLE FORMS Created</p>
                <input
                  name="form_link"
                  value={this.context.form_link}
                  type="text"
                  className="form-control"
                  placeholder="form link"
                  onChange={this.context.handleChange}
                ></input>
                <button
                  className="btn btn-primary"
                  onClick={this.context.handleFormSubmit}
                >
                  SUBMIT
                </button>{" "}
              </>
            )}
            <br />

            {this.context.issheetlinkProvided ? (
              <>
                <p>Step 2 completed</p>
                <p>Sheet link Submmited</p>
              </>
            ) : (
              <>
                <p>PLEASE PROVIDE THE SHAREABLE LINK OF SPREADSHEET</p>
                <input
                  name="sheet_link"
                  value={this.context.sheet_link}
                  type="text"
                  className="form-control"
                  placeholder="Sheet Link"
                  onChange={this.context.handleChange}
                ></input>
                <br />
                <button
                  className="btn btn-primary"
                  onClick={this.context.handleSheetSubmit}
                >
                  SUBMIT
                </button>
                <br />
              </>
            )}

            {this.context.templetIdProvided ? (
              <>
                <p>All Set Go ahead and add data to Form</p>
                <button className="btn btn-success" onClick={this.context.createData}>
                  Go TO From
                </button>{" "}
                <br />
              </>
            ) : (
              <>
                <p>GO TO RevvSales AND CREATE TEMPLATE</p>
                <a
                  className="btn btn-warning"
                  href="https://auth.revvsales.com/signin"
                >
                  Link to Revv Sales
                </a>

                <input
                  name="templet_id"
                  value={this.context.templet_id}
                  type="text"
                  className="form-control"
                  placeholder="Templet Id"
                  onChange={this.context.handleChange}
                ></input>
                <br />
                <button
                  className="btn btn-primary"
                  onClick={this.context.handleTemplateSubmit}
                >
                  submit
                </button>
              </>
            )}
            <button className="btn btn-danger" onClick={this.context.resetData}>
          Reset
        </button>
          </>
        )}
        <br />
        <br />
      </div>
    );
  }
}
NewForm.contextType = AppContext;