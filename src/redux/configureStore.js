import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authReducer";

const LoggedInState={
    isLoggedIn: true,
    username: 'user_001',
    displayName: 'UserDisplayName',
    image: null,
    password:'Pas0124566',
};

const configureStore=()=>{
    return createStore(authReducer, LoggedInState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

export default configureStore;