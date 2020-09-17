import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppContextProvider from "./context/ContextProvider";



let target = document.getElementById('root')

ReactDOM.render(
  <AppContextProvider>
    <App />,
  </AppContextProvider>,
  target
);
