import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./bootstrap_override.scss";  
import './i18n';
import App from "./container/App";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import authReducer from "./redux/authReducer";
//import AuthenticationContext from "./shared/AuthenticationContext";


const LoggedInState={
    isLoggedIn: true,
    username: 'user_001',
    displayName: 'UserDisplayName',
    image: null,
    password:'Pas0124566',
};

 
const store=createStore(authReducer, LoggedInState);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> 
, document.getElementById("root"));
