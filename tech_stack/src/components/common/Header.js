// Import libraries for making a component
import React from 'react';
import {Text, SafeAreaView} from 'react-native';

// Make a component
const Header = (props) => {
  const {textStyle, viewStyle} = styles;
  return (
    <SafeAreaView style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </SafeAreaView>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
  },
};

// Make the component available to other parts of the app
export {Header};
