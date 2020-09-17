import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Document from  "./document"

class From extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form_link : props.form_link,
            sheet_link : "",
            templet_id : "",
            form_display: true,
        }
    }

    gotoDocumnetCreation = () => {
        this.setState({
            form_display:false
        })
    }

    render(){
        return (

            this.state.form_display ? <>
            <div className="container-fulid">
            <iframe src={this.form_link+"/viewform?embedded=true"} width="640" height="1110" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            <button onClick={this.gotoDocumnetCreation}>Generate Documents</button>111
            </div>
            </> :

            <Document/>
            
        )
    }

}

export default From