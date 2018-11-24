# A React Native application illustrating use of Redux and Redux thunk

Libraries used: 
   - react, react-native-- for creating a cross platform native app
   - redux-- the data store, 
   - react-redux-- for connecting reactnative application to the redux library, 
   - redux-thunk-- a middleware of redux used for synch calls
   - firebase-- used for authentication

The primary objective of the application is to illustrate how redux should be used in a reactnative application. It shows 3 approaches for this integration which are progressively better.
- Approach 1: This approach does not use redux at all. All data and business methods are contained within the Component. This approach uses the file AuthForm.js which creates the main component of the application that stores data in component state.
- Approach 2: This approach uses redux only for keeping data. It does not use redux for making asynch calls. Asynch calls are contained within the component itself. In this approach the file AuthFormRedux.js is used. This file creates main component of the application which makes asynch calls but the data is stored in the redux store.
- Approch 3: This approach uses redux for storing data and uses reduxthunk for making asynch calls. The main application component in this approach is created by the file AuthFormReduxThunk.js. This component neither stores data nor it invokes any asynch calls. Redux with its middleware thunk works as the data keeper as well as the asynch method invoker for the component. 

Note: Follow the comments given in app.js to apply any of the above three approaches.
