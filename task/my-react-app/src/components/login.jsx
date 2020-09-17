import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="container">
                <p>CREATE A NEW GOOGLE FORM</p>
                <button class="btn btn-primary">GO TO GOOGLE FORM</button>
                <br/>
                <p>PLEASE GIVE THE EMBEB LINK OF GOOGLE FORMS</p>
                
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                <br/>
                <button class="btn btn-primary">SUBMIT</button>
                <br/>
                <p>PLEASE PROVIDE THE SHAREABLE LINK OF SPREADSHEET</p>
            
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                <br/>
                <button class="btn btn-primary">SUBMIT</button>


            </div >

        )

    }
}