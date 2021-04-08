import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
