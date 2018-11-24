import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import firebase from 'firebase';

import reducers from './src/reducers';

import AuthForm from './src/components/AuthForm';
import AuthFormRedux from './src/components/AuthFormRedux';
import AuthFormReduxThunk from './src/components/AuthFormReduxThunk';
import {Spinner, Button} from './src/components/common';



export default class App extends React.Component {
  state = {
    loggedIn: null
  }
  
  /* !!!!IMPORTANT!!!! store creation should be outside the render() method */
  store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCDc8KpKXWLOdid8FBiL4CYj1lVjE-FK_8",
      authDomain: "auth-akhil.firebaseapp.com",
      databaseURL: "https://auth-akhil.firebaseio.com",
      projectId: "auth-akhil",
      storageBucket: "auth-akhil.appspot.com",
      messagingSenderId: "601536386599"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({loggedIn: true});
      }else{
        this.setState({loggedIn: false});
      }
    });

  }

  renderLonginForm(){
    switch (this.state.loggedIn){
      case true:
        return (
          <View>
            <Text>You are logged in</Text>
            <Button onPress={()=>firebase.auth().signOut()}>
              Logout
            </Button>
          </View>
        );
      case false:
        /*
        return <AuthForm /> //approach 1-- No use of redux
        return <AuthFormRedux /> //approach 2-- redux is only used as a data store
        return <AuthFormReduxThunk />; //approach 3-- redux is used as a data store as well as for calling asynch function
        */
        return <AuthFormReduxThunk />;
      default:
        return <Spinner />;
    }
  }


  render() {
    return (
        <Provider store={this.store}>
          <ScrollView>
            {this.renderLonginForm()}
          </ScrollView>
        </Provider>
    );
  }
}