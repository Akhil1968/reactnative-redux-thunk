import firebase from 'firebase';

import {
   LOGIN_SUCCESSFUL, 
   LOGIN_FAILED, 
   USER_CREATION_SUCCESSFUL, 
   USER_CREATION_FAILED, 
   LOADING_STARTS,
   EMAIL_CHANGED,
   PASSWORD_CHANGED
} from './ActionTypes';

/* used in approach 2 and 3*/
export const emailChangedAction = (text) => {
   return {
     type: EMAIL_CHANGED,
     payload: text
   };
 };
 
 /* used in approach 2 and 3*/
 export const passwordChangedAction = (text) => {
   return {
     type: PASSWORD_CHANGED,
     payload: text
   };
 };

 /*  Action Creator function for thunk: Only used in approach 3 */
export const LoginCreateUserAction = (email, password) => {
   return (dispatch) => {
     dispatch({ type: LOADING_STARTS });
 
     firebase.auth().signInWithEmailAndPassword(email, password)
         .then(user => dispatch({ type: LOGIN_SUCCESSFUL }))
         .catch((error) => {
               dispatch({ type: LOGIN_FAILED });
               firebase.auth().createUserWithEmailAndPassword(email, password)
                     .then(user => dispatch({ type: USER_CREATION_SUCCESSFUL }))
                     .catch(() => dispatch({ type: USER_CREATION_FAILED }))
         });
   };
 };

/* only used in approach 2 */
export const LoginSuccessAction = () => {
     return {
        type: LOGIN_SUCCESSFUL
     };
 }

/* only used in approach 2 */
export const LoginFailedAction = () => {
    return {
       type: LOGIN_FAILED
    };
}

/* only used in approach 2 */
export const UserCreationSucessAction = () => {
    return {
       type: USER_CREATION_SUCCESSFUL
    };
}

/* only used in approach 2 */
export const UserCreationFailedAction = () => {
    return {
       type: USER_CREATION_FAILED
    };
}

/* only used in approach 2 */
export const LoadingStartsAction = () => {
    return {
       type: LOADING_STARTS
    };
}

