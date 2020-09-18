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
                <p class="font-weight-bold">Step 1 completed</p>
                <p class="font-weight-bold">Form Created</p>
              </>
            ) : (
              <>
                {" "}
                <p class="font-weight-bold" style={{}}>CREATE A NEW GOOGLE FORM</p>
                <a
                  href={"https://docs.google.com/forms/u/0/"}
                  className="btn btn-primary btn-lg btn-block"
                >
                  GO TO GOOGLE FORM
                </a>
                <br />
                <p class="font-weight-bold">PLEASE GIVE THE LINK OF GOOGLE FORMS Created</p>
                <input
                  name="form_link"
                  value={this.context.form_link}
                  type="text"
                  className="form-control"
                  placeholder="form link"
                  onChange={this.context.handleChange}
                ></input>
                <br/>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={this.context.handleFormSubmit}
                >
                  SUBMIT
                </button>{" "}
              </>
            )}
            <br />

            {this.context.issheetlinkProvided ? (
              <>
                <p class="font-weight-bold">Step 2 completed</p>
                <p class="font-weight-bold">Sheet link Submmited</p>
              </>
            ) : (
              <>
                <p class="font-weight-bold">PLEASE PROVIDE THE SHAREABLE LINK OF SPREADSHEET</p>
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
                  className="btn btn-primary btn-lg btn-block"
                  onClick={this.context.handleSheetSubmit}
                >
                  SUBMIT
                </button>
                <br />
              </>
            )}

            {this.context.templetIdProvided ? (
              <>
                <p class="font-weight-bold">All Set Go ahead and add data to Form</p>
                <button className="btn btn-success btn-lg btn-block" onClick={this.context.createData}>
                  Go TO From
                </button>{" "}
                <br />
              </>
            ) : (
              <>
                <p class="font-weight-bold">GO TO RevvSales AND CREATE TEMPLATE</p>
                <a
                  className="btn btn-warning btn-lg btn-block"
                  href="https://auth.revvsales.com/signin"
                >
                  Link to Revv Sales
                </a>
                 <br/>
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
                  className="btn btn-primary btn-lg btn-block"
                  onClick={this.context.handleTemplateSubmit}
                >
                  submit
                </button>
        
              </>
            )}
            <button className="btn btn-danger btn-lg btn-block" onClick={this.context.resetData}>
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