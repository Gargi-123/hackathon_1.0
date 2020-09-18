import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { AppContext } from "../context/ContextProvider";
import Data from "./data.json"

class Document extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    

    sendMail = () => {
        alert("mailsent")
    }

    render(){
        return (
            <div className="container-fulid">
            <button className="btn btn-primary" onClick={() => this.context.Documnet_creation(Data)}>Generate Documents</button>
            <br/>
            <a href="revvsales.com/assets" className="btn btn-primary">View Documents</a>
            <br/>
            <button className="btn btn-primary" onClick={this.sendMail}>Send Mail to Each</button>
            </div>
        )
    }

}

export default Document

Document.contextType = AppContext;