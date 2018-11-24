import React from 'react';
import {View, Text} from 'react-native';
import { bold } from 'ansi-colors';

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
);
}

const styles = {
    viewStyle: {
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      color: 'white',
      fontSize: 25
    }
  };

export  {Header};