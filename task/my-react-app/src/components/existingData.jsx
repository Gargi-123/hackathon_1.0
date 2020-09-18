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
                    <p class="font-weight-bold">Step 1 completed</p>
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
            <br />
            <br />
          </div>
        );
    }
}


export default ExistingData

ExistingData.contextType = AppContext;