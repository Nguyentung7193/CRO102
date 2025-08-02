import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { Provider } from 'react-redux';
import store from './src/demo/sl5/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
