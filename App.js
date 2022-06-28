import React from 'react';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import SearchMapPage from './screens/SearchMapPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const App = () => {
  return (
      <SearchMapPage/>
  );
};

export default App;
