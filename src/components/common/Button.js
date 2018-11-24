import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = (props) => {
    return (
            <TouchableOpacity 
                style={styles.buttonStyle} 
                onPress={props.onPress} >
                <Text style={styles.textStyle}>
                    {props.children}
                </Text>
            </TouchableOpacity>
       );
}

const styles = {
    textStyle: {
      alignSelf: 'center',
      color: 'green',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    },
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'green',
      marginLeft: 5,
      marginRight: 5
    }
  };

  export {Button};