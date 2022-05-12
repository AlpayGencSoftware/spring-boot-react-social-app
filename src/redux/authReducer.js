const defaultState={
    isLoggedIn: false,
    username: 'user_001',
    displayName: 'undefined',
    image: null,
    password:'undefined',
};
 
const authReducer =(state={...defaultState}, action)=>{ 
     if (action.type==='logout-success') {
        return defaultState;
     }
    return state;
}

export default authReducer;