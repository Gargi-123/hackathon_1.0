import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import Form from "./form"
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form_link : "",
            sheet_link : "",
            templet_id : "",
            isFormSubmitted : false,
            issheetlinkProvided : false,
            templetIdProvided: false,
            all_done : false,
        }
    }

    handleChange = (e) => {
       this.setState({
           [e.target.name]: e.target.value}) 
    }

    handleFormSubmit = (e) => {
        let x = this.state.form_link
        x = x.split("/viewform")
        console.log(x[0])

        this.setState({
            form_link: x[0] , 
            isFormSubmitted : true
        })
        console.log(this.state.form_link)
    }

    handleSheetSubmit = () => {
        this.setState({
            sheet_link: this.state.sheet_link, 
            issheetlinkProvided : true
        })
        console.log(this.state.sheet_link)
    }

    handleTemplateSubmit = ()  => {
        this.setState({
            templet_id: this.state.templet_id,
            templetIdProvided : true
        })
        console.log(this.state.templet_id)
    }

    createData = async  () => {
        if(this.state.isFormSubmitted && this.state.issheetlinkProvided && this.state.templetIdProvided){
            this.setState({
                all_done: true
        })
    }
    }

    resetData = () => {
        this.setState({
            form_link : "",
            sheet_link : "",
            templet_id : "",
            isFormSubmitted : false,
            issheetlinkProvided : false,
            templetIdProvided: false,
            all_done : false,
        })
    }

    render() {

        return (
            <div className="container">

            {this.state.all_done ? <Form form_link={this.state.form_link} sheet_link={this.state.sheet_link} templet_id={this.state.templet_id}/> :
            <>
                {this.state.isFormSubmitted ? <><p>Step 1 completed</p><p>Form Created</p></> : <> <p>CREATE A NEW GOOGLE FORM</p>
                <a href={"https://docs.google.com/forms/u/0/"} className="btn btn-primary">GO TO GOOGLE FORM</a>
                <br/>
                <p>PLEASE GIVE THE LINK OF GOOGLE FORMS Created</p>
                <input name="form_link" value={this.state.form_link} type="text" className="form-control" placeholder="form link" onChange={this.handleChange}></input>
                <button  className="btn btn-primary" onClick={this.handleFormSubmit}>SUBMIT</button> </> }
                <br/>

                {this.state.issheetlinkProvided ? <><p>Step 2 completed</p><p>Sheet link Submmited</p></> : <><p>PLEASE PROVIDE THE SHAREABLE LINK OF SPREADSHEET</p>
                <input name="sheet_link" value={this.state.sheet_link} type="text" className="form-control" placeholder="Sheet Link" onChange={this.handleChange}></input>
                <br/>
                <button  className="btn btn-primary" onClick={this.handleSheetSubmit}>SUBMIT</button><br/></>}

                {this.state.templetIdProvided ? <><p>All Set Go ahead and add data to Form</p> 
                <button  className="btn btn-sucess" onClick={this.createData}>Go TO From</button> <br/> 
                </>
                : <><p>GO TO RevvSales AND CREATE TEMPLATE</p>
                <a className="btn btn-warning" href="https://auth.revvsales.com/signin">Link to Revv Sales</a>

                <input name="templet_id" value={this.state.templet_id} type="text" className="form-control" placeholder="Templet Id" onChange={this.handleChange}></input>
                <br/>
                <button  className="btn btn-primary" onClick={this.handleTemplateSubmit}>submit</button></>}
            </>}
            <br/>
            <br/>
            <button  className="btn btn-danger" onClick={this.resetData}>Reset</button>
            </div>
    
        )

    }
}


export default Login