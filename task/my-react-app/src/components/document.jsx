import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import { AppContext } from "../context/ContextProvider";





class Document extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    CreationDocumnet = () => {
        alert("Are you sure you want to do it")
    }

    sendMail = () => {
        alert("mailsent")
    }

    render(){
        return (
            <div className="container-fulid ">
            <button className="btn btn-primary btn-lg btn-block m-3" onClick={this.CreationDocumnet}>Generate Documents</button>
            <a href="revvsales.com/assets" className="btn btn-primary btn-lg btn-block m-3">View Documents</a>
            {/* <button className="btn btn-primary btn-lg btn-block" onClick={this.sendMail}>Send Mail to Each</button> */}
            </div>
        )
    }

}

export default Document