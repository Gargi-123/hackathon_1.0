import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./form";
import { AppContext } from "../context/ContextProvider";
class NewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form_link: this.context.form_link,
      sheet_link: this.context.sheet_link,
      templet_id: this.context.templet_id,
      isFormSubmitted: this.context.isFormSubmitted,
      isSheetlinkProvided: this.context.issheetlinkProvided,
      templetIdProvided: this.context.templetIdProvided,
      all_done: this.context.all_done,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return this.state.state_type == null ? (
      <></>
    ) : (
      <div className="container">
        {this.state.all_done ? (
          <Form
          />
        ) : (
          <>
            {this.state.isFormSubmitted ? (
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
                  value={this.state.form_link}
                  type="text"
                  className="form-control"
                  placeholder="form link"
                  onChange={this.handleChange}
                ></input>
                <button
                  className="btn btn-primary"
                  onClick={this.handleFormSubmit}
                >
                  SUBMIT
                </button>{" "}
              </>
            )}
            <br />

            {this.state.issheetlinkProvided ? (
              <>
                <p>Step 2 completed</p>
                <p>Sheet link Submmited</p>
              </>
            ) : (
              <>
                <p>PLEASE PROVIDE THE SHAREABLE LINK OF SPREADSHEET</p>
                <input
                  name="sheet_link"
                  value={this.state.sheet_link}
                  type="text"
                  className="form-control"
                  placeholder="Sheet Link"
                  onChange={this.handleChange}
                ></input>
                <br />
                <button
                  className="btn btn-primary"
                  onClick={this.handleSheetSubmit}
                >
                  SUBMIT
                </button>
                <br />
              </>
            )}

            {this.state.templetIdProvided ? (
              <>
                <p>All Set Go ahead and add data to Form</p>
                <button className="btn btn-sucess" onClick={this.createData}>
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
                  value={this.state.templet_id}
                  type="text"
                  className="form-control"
                  placeholder="Templet Id"
                  onChange={this.handleChange}
                ></input>
                <br />
                <button
                  className="btn btn-primary"
                  onClick={this.handleTemplateSubmit}
                >
                  submit
                </button>
              </>
            )}
          </>
        )}
        <br />
        <br />
        <button className="btn btn-danger" onClick={this.resetData}>
          Reset
        </button>
      </div>
    );
  }
}

export default NewForm;
