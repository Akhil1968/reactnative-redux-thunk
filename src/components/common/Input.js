import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';



const Input = (props) => {
    return (
        <View style={containerStyle}>
            <Text style={textStyle}>
                {props.prompt}
            </Text>
            <TextInput 
                style={textInputStyle}
                autoCorrect={false}
                value={props.value}
                placeholder={props.placeHolder}
                onChangeText={props.onPress}
                secureTextEntry={props.secureTextEntry} >
            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around'
    },
    textStyle: {
        flex: 1,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'green',
        borderRadius: 2,
        paddingLeft: 4,
        paddingRight: 4,
        marginLeft: 2,
        marginRight: 2
    },
    textInputStyle: {
        flex: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'green',
        borderRadius: 2,
        paddingLeft: 4,
        paddingRight: 4,
        marginLeft: 2,
        marginRight: 2,
        fontSize: 18,
    }
});

const {containerStyle, textStyle, textInputStyle} = styles; 

export  {Input};