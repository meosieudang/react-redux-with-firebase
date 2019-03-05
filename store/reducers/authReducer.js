const initialState = {
    authErr: null,
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('err')
            return {
                ...state,
                authErr: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('success')
            return {
                ...state,
                authErr: null
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout_success')
            return {
                ...state
            }
        case 'SIGNUP_SUCCESS':
            console.log('SIGNUP_SUCCESS')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('SIGNUP_ERROR')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}
export default authReducer;