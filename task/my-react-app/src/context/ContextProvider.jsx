import React from "react";
import axios from "axios";
export const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      // revv account 
      access_token: "",
      subdomain:"",
      refresh_token:"",
      // 

      // 
      state_type: null,
      // 
      form_link: "",
      sheet_link: "",
      templet_id: "",
      isFormSubmitted: false,
      issheetlinkProvided: false,
      templetIdProvided: false,
      //
      all_done: false,
      //
      //
      form_display: true,
      //

      data_json: [],
      data_csv:[],

      created_doc_data: []
    };
  }

  authUser = async (email, password, org, event) => {
    event.preventDefault();
    await axios({
      method: 'post',     
      url: "https://api.revvsales.com/api/v2/auth/initiate-auth",
       headers: { 'Content-Type': 'application/json',
          'GrantType' : 'password' }, 
      data: {
      "user_email": email,
      "password": password,
      "org_domain": org
      }
    }).then((res) => {
      console.log(res.data.User)
        this.setState({
          isAuth: true,
          access_token: res.data.User.access_token,
          subdomain:res.data.User.subdomain,
          refresh_token:res.data.User.refresh_token
        });
        console.log(this.state.access_token)
      })
      .catch((error) => alert(error));

      this.automate(email,password)
  };

  selectMode = (e) => {
    this.setState({
      state_type: e.target.name,
    });
  };

  // for new form component
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    let x = this.state.form_link
    x = x.split("/viewform");
    console.log(x[0]);

    this.setState({
      form_link: x[0],
      isFormSubmitted: true,
    });
    console.log(this.state.form_link);
  };

  handleSheetSubmit = (e) => {
    this.setState({
      sheet_link: this.state.sheet_link,
      issheetlinkProvided: true,
    });
    console.log(this.state.sheet_link);
  };

  handleTemplateSubmit = (e) => {
    this.setState({
      templet_id: this.state.templet_id,
      templetIdProvided: true,
    });
    console.log(this.state.templet_id);
  };

  createData = () => {
    if (
      this.state.isFormSubmitted &&
      this.state.issheetlinkProvided &&
      this.state.templetIdProvided
    ) {
      this.setState({
        all_done: true,
      });
    }
  };

  resetData = () => {
    this.setState({
      form_link: "",
      sheet_link: "",
      templet_id: "",
      isFormSubmitted: false,
      issheetlinkProvided: false,
      templetIdProvided: false,
      all_done: false,
    });
  };

  // end

  // for document creation

  gotoDocumnetCreation = () => {
    this.setState({
        form_display:false
    })
}

Documnet_creation = async (data) => {

  for(let i = 0 ; i < data.length; i++){

    await axios({
      method: 'post',     
      url: "https://api.revvsales.com/api/docs",
       headers: { 'AccessToken': this.state.access_token,
          'Content-Type' : 'application/json' }, 
      data: {
      "template_id" : this.state.templet_id
      }
    }).then((res) => {
      console.log(res.data)
      })
      .catch((error) => alert(error));
  
      // await axios({
      //   method: "post",
      //   url: "http://localhost:5000/update_doc",
      //   data: { ...data }
      // })

  }

  
}


//
automate = async(email,pass) => {
  const response = await axios({
    method: "post",
    url: "http://localhost:5000/login",
    data: {
      "email": email,
      "password": pass,
    },
  })
}



  render() {
    let {
      isAuth,
      isFormSubmitted,
      issheetlinkProvided,
      templetIdProvided,
      all_done,
      form_link,
      sheet_link,
      templet_id,
      state_type,
      form_display,
    } = this.state;
    let {
      authUser,
      handleFormSubmit,
      handleSheetSubmit,
      handleTemplateSubmit,
      createData,
      resetData,
      handleChange,
      selectMode,
      gotoDocumnetCreation,
      automate,
      Documnet_creation,

      
    } = this;
    return (
      <AppContext.Provider
        value={{
          isAuth,
          isFormSubmitted,
          issheetlinkProvided,
          templetIdProvided,
          all_done,
          form_link,
          sheet_link,
          templet_id,
          state_type,
          form_display,
          authUser,
          handleFormSubmit,
          handleSheetSubmit,
          handleTemplateSubmit,
          createData,
          handleChange,
          selectMode,
          gotoDocumnetCreation,
          resetData,
          automate,
          Documnet_creation,
          
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
