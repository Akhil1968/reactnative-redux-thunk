import React, {Component} from 'react';
import {View, Text}  from 'react-native';
import firebase from 'firebase';

import {Button, Header, Card, CardSection, Input, Spinner} from './common';


class AuthForm extends Component  {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    /*
    Approach 1: No redux: 
    1. authenticate method calls  asynch methods on its own
    2. The component state is used to store data
    */   
    auhtenticate(){
        this.setState({
            error: '',
            loading: true
         });
        
        
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            this.setState({
                error: 'Login Successful',
                email: '',
                password: '',
                loading: false
             });
        })
        .catch((err)=>{
            this.setState({
                error: 'Login email or password is incorrect. ' + err.message,
                loading: false
             });
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=>{
                this.setState({
                    error: 'User created in firebase',
                    email: '',
                    password: '',
                    loading: false
                 });
            })
            .catch( (err)=>{ 
                this.setState({error: 'User Creation failed. ' + err.message, loading: false });
            });
        });
    }

    showError(){
        if (this.state.error !== ''){
           return <Text>{this.state.error}</Text>
        }
    }

    renderButton(){
        if (this.state.loading){
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
                            value={this.state.email}
                            onPress={(txt) => this.setState({email: txt})}
                            secureTextEntry={false}>
                        </Input>
                    </CardSection>
                        
                    <CardSection>
                        <Input 
                            prompt={'Password'}
                            placeHolder={''}
                            value={this.state.password}
                            onPress={(txt) => this.setState({password: txt})}
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



export default AuthForm;