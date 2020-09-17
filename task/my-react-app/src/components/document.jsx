import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"

class Document extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sheet_link : "",
            templet_id : "",
            url: "",

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
            <div className="container-fulid">
            <p>Paste your org_url</p>
            <input placeholder="Paste url" onChange={this.handleChange} value={this.url}/>
            <button onClick={this.creationDocumnet}>Generate Documents</button>
            <a href="revvsales.com/assets" className="btn btn-primary">View Documents</a>
            <button onClick={this.sendMail}>Send Mail to Each</button>
            </div>
        )
    }

}

export default Document