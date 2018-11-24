import React, {Component} from 'react';
import {View, Text}  from 'react-native';
import {connect} from 'react-redux';
import firebase from 'firebase';

import {Button, Header, Card, CardSection, Input, Spinner} from './common';
import {
    emailChangedAction,
    passwordChangedAction,
    LoginCreateUserAction
} from '../actions/AuthActions';


class AuthFormReduxThunk extends Component  {
   
    /*
    Approach 3: Redux with thunk: 
    1. The sysnch methods are called withing the action creator 
    2. Redux is also used as a data store
    3. No business login exists within the component
    */
    auhtenticate(){
        this.props.LoginCreateUserAction(this.props.email, this.props.password);
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
/* mapStateToProps is a function that returns an object that has mapping of store values*/
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error
    };
}

/* mapDispatchToProps is an object that has mapping for action creator functions*/
const mapDispatchToProps =  {
    emailChangedAction,
    passwordChangedAction,
    LoginCreateUserAction
};


export default connect(mapStateToProps, mapDispatchToProps)(AuthFormReduxThunk);