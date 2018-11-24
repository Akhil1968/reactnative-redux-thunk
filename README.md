# A React Native application illustrating use of Redux and Redux thunk

Libraries used: 
   - react, react-native-- for creating a cross platform native app
   - redux-- the data store, 
   - react-redux-- for connecting reactnative application to the redux library, 
   - redux-thunk-- a middleware of redux used for synch calls
   - firebase-- used for authentication

The primary objective of the application is to illustrate how redux should be used in a reactnative application. It shows 3 approaches for this integration which are progressively better.
- Approach 1: This approach does not use redux at all. All data and business methods are contained with the Component (AuthForm.js)
- Approach 2: This approach uses redux for keepting data. But it does not use redux for making asynch calls. (AuthFormRedux.js)
- Approch 3: This approach uses redux to storing data and uses reduxthunk for making asynch calls. (AuthFormReduxThunk.js)

Note: Follow the comments given in app.js to apply any of the above three approaches.
