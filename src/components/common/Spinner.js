import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Spinner = (props) => {
    return (
        <View style={styles.containerStyle}>
            <ActivityIndicator size='large'>
            </ActivityIndicator>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export  {Spinner};