import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form from "./form"
import { AppContext } from "../context/ContextProvider";
class NewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sheet_link : "",
            templet_id : "",
            issheetlinkProvided : false,
            templetIdProvided: false,
            all_done : false,
        }
    }

    handleChange = (e) => {
       this.setState({
           [e.target.name]: e.target.value}) 
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

        this.state.state_type == null ? <></> : 
            <div className="container">

            {this.state.all_done ? <Form form_link={this.state.form_link} sheet_link={this.state.sheet_link} templet_id={this.state.templet_id}/> :
            <>

                {this.state.issheetlinkProvided ? <><p>Step 2 completed</p><p>Sheet link Submmited</p></> : <><p>PLEASE PROVIDE THE SHAREABLE LINK OF SPREADSHEET</p>
                <input name="sheet_link" value={this.state.sheet_link} type="text" className="form-control" placeholder="Sheet Link" onChange={this.handleChange}></input>
                <br/>
                <button  className="btn btn-primary" onClick={this.handleSheetSubmit}>SUBMIT</button><br/></>}

                {this.state.templetIdProvided ? <>
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


export default NewForm