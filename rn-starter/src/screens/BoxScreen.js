import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <View style={styles.box1Style} />
        <View style={styles.box2Style} />
        <View style={styles.box3Style} />
    </View>

}

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box1Style: {
        backgroundColor: 'red',
        width: 50,
        height: 50
    },
    box2Style: {
        backgroundColor: 'green',
        width: 50,
        height: 50,
        top: 50
    },
    box3Style: {
        backgroundColor: 'purple',
        width: 50,
        height: 50
    }
});

export default BoxScreen;