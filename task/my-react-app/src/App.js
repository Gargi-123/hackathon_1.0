import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import DashBoard from "./components/DashBoard"
import { AppContext } from "./context/ContextProvider";


function App() {
  return (
    <AppContext.Consumer>
    {(value) => {
      return (
        <div>
          {value.isAuth ? <DashBoard/> : <Login/>}
        </div>
      );
    }}
  </AppContext.Consumer>
  );
}

export default App;