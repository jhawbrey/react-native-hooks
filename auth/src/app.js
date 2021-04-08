import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBkzUC8tnFi9eEkBaiElfO1683V410cJIQ',
      authDomain: 'auth-jha.firebaseapp.com',
      databaseURL: 'https://auth-jha.firebaseio.com',
      projectId: 'auth-jha',
      storageBucket: 'auth-jha.appspot.com',
      messagingSenderId: '555835295145',
      appId: '1:555835295145:web:887019d36b3141b06db0b8',
      measurementId: 'G-EX0FK5F2FN',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    height: 100,
  },
};

export default App;
