import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from './components/common';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDpVSAvvZiMHd5YWtsJAwNYkUfUxVqDsvY',
      authDomain: 'jha-manager.firebaseapp.com',
      databaseURL: 'https://jha-manager.firebaseio.com',
      projectId: 'jha-manager',
      storageBucket: 'jha-manager.appspot.com',
      messagingSenderId: '458415972489',
      appId: '1:458415972489:web:310051eb7a8bcd0d91a658',
      measurementId: 'G-JRDY7H52N7',
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <View style={{flex: 1}}>
        <Header />
        <Provider store={store}>
          <LoginForm />
        </Provider>
      </View>
    );
  }
}

export default App;
