import {
    LOGIN_SUCCESSFUL, 
    LOGIN_FAILED, 
    USER_CREATION_SUCCESSFUL, 
    USER_CREATION_FAILED,
    LOADING_STARTS,
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../actions/ActionTypes';


const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    loading: false
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EMAIL_CHANGED:
            return { 
                ...state, 
                email: action.payload 
            };

      case PASSWORD_CHANGED:
            return { 
                ...state, 
                password: action.payload 
            };

        case LOGIN_SUCCESSFUL:
            return { 
                ...state, 
                error: 'Login Successful',
                email: '',
                password: '',
                loading: false
             };

        case LOGIN_FAILED:
            return { 
                ...state, 
                error: 'Login failed',
                loading: false
            };

        case USER_CREATION_SUCCESSFUL:
            return { 
                ...state, 
                error: 'User created in firebase',
                email: '',
                password: '',
                loading: false
            };

        case USER_CREATION_FAILED:
            return { 
                ...state, 
                error: 'User Creation failed.',
                email: '',
                password: '',
                loading: false
            };

        case LOADING_STARTS:
                return { 
                    ...state, 
                    error: '',
                    loading: true
                };

        default:
            return state;
    }
    
}

export default AuthReducer;