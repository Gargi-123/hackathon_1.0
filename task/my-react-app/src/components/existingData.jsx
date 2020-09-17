import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form from "./form"
import { AppContext } from "../context/ContextProvider";
class ExistingData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }


    render() {

        return (

            <div className="container">
              <>
                {this.context.issheetlinkProvided ? (
                  <>
                    <p>Step 1 completed</p>
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
            <br />
            <br />
          </div>
        );
    }
}


export default ExistingData

ExistingData.contextType = AppContext;