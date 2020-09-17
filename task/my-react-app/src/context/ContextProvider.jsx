import React from "react";
import axios from "axios";
export const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: true,
      form_link: "",
      sheet_link: "",
      templet_id: "",
      isFormSubmitted: false,
      issheetlinkProvided: false,
      templetIdProvided: false,
      all_done: false,
    };
  }

  authUser = async (email, password, event) => {
    event.preventDefault();
    await axios
      .post("https://api.revvsales.com/api/v2/auth/initiate-auth", {
        email: email,
        password: password,
      })
      .then((res) => {
        this.setState({
          isAuth: true,
          id: email,
          token: res.data.token,
        });
      })
      .catch((error) => alert(error));
  };

  handleFormSubmit = (e) => {
    let x = this.state.form_link;
    x = x.split("/viewform");
    console.log(x[0]);

    this.setState({
      form_link: x[0],
      isFormSubmitted: true,
    });
    console.log(this.state.form_link);
  };

  handleSheetSubmit = () => {
    this.setState({
      sheet_link: this.state.sheet_link,
      issheetlinkProvided: true,
    });
    console.log(this.state.sheet_link);
  };

  handleTemplateSubmit = () => {
    this.setState({
      templet_id: this.state.templet_id,
      templetIdProvided: true,
    });
    console.log(this.state.templet_id);
  };

  createData = async () => {
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

  render() {
    let {
      isAuth,
      isFormSubmitted,
      issheetlinkProvided,
      templetIdProvided,
      all_done,
    } = this.state;
    let {
      authUser,
      handleFormSubmit,
      handleSheetSubmit,
      handleTemplateSubmit,
      createData,
    } = this;
    return (
      <AppContext.Provider
        value={{
          isAuth,
          isFormSubmitted,
          issheetlinkProvided,
          templetIdProvided,
          all_done,
          authUser,
          handleFormSubmit,
          handleSheetSubmit,
          handleTemplateSubmit,
          createData,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
