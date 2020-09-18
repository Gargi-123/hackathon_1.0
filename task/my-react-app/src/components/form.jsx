import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Document from "./document"
import { AppContext } from "../context/ContextProvider";

class From extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }



    render() {
        return (

            this.context.form_display ? <>
                <div style={{ height: "100%", width: "100%", backgroundColor: " #ffcccc" }}>
                    <div className="container-fluid">
                        <iframe src={this.context.form_link + "/viewform?embedded=true"} width="640" height="1110" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                        <button className="btn btn-warning" onClick={this.context.gotoDocumnetCreation}>Generate Documents</button>
                    </div>
                </div>
            </> :

                <Document />

        )
    }

}

export default From

From.contextType = AppContext;