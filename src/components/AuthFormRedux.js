import React, {Component} from 'react';
import {View, Text}  from 'react-native';
import {connect} from 'react-redux';
import firebase from 'firebase';

import {Button, Header, Card, CardSection, Input, Spinner} from './common';
import {
    emailChangedAction,
    passwordChangedAction,
    LoginSuccessAction,
    LoginFailedAction,
    UserCreationSucessAction,
    UserCreationFailedAction,
    LoadingStartsAction
} from '../actions/AuthActions';


class AuthFormRedux extends Component  {
   
    /*
    Approach 2: Redux without thunk: 
    1. The authenticate method calls asynch methods on its own
    2. Redux is used just as a data store; it does not make any asynch calls
    */
    auhtenticate(){
        this.props.LoadingStartsAction();
        
        
        firebase.auth().signInWithEmailAndPassword(this.props.email, this.props.password)
        .then(()=>{
            this.props.LoginSuccessAction();
        })
        .catch((err)=>{
             this.props.LoginFailedAction();
            firebase.auth().createUserWithEmailAndPassword(this.props.email, this.props.password)
            .then(()=>{
                this.props.UserCreationSucessAction();
            })
            .catch( (err)=>{ 
                //this.setState({error: 'User Creation failed. ' + err.message, loading: false });
                this.props.UserCreationFailedAction();
            });
        });
    }

    showError(){
        if (this.props.error !== ''){
           return <Text>{this.props.error}</Text>
        }
    }

    renderButton(){
        if (this.props.loading){
            return <Spinner />;
        }

        return <Button onPress={this.auhtenticate.bind(this)}> Login  </Button>;
    }

    render(){
        return (
            <View>
                <Header headerText={'Login Form'}/>
                <Card>
                    <CardSection>
                        <Input 
                            prompt={'E-Mail'}
                            placeHolder={'abc@mail.com'}
                            value={this.props.email}
                            onPress={ (text) => this.props.emailChangedAction(text)}
                            secureTextEntry={false}>
                        </Input>
                    </CardSection>
                        
                    <CardSection>
                        <Input 
                            prompt={'Password'}
                            placeHolder={'password'}
                            value={this.props.password}
                            onPress={ text => this.props.passwordChangedAction(text) }
                            secureTextEntry>
                        </Input>
                    </CardSection>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
                {this.showError()}
            </View>
        );
    }
}
/* mapStateToProps is a function that returns an object that has mapping */
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error
    };
}

/* mapDispatchToProps is an object that has mapping */
const mapDispatchToProps =  {
    emailChangedAction: emailChangedAction,
    passwordChangedAction:   passwordChangedAction,
    LoginSuccessAction,
    LoginFailedAction,
    UserCreationSucessAction,
    UserCreationFailedAction,
    LoadingStartsAction
};


export default connect(mapStateToProps, mapDispatchToProps)(AuthFormRedux);