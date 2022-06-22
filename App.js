import React from 'react';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SignupPage/>
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUpPageName" component={SignUpPageName} />
        <Stack.Screen name="SignupPageEmail" component={SignupPageEmail} />
        <Stack.Screen name="SignupPageNumber" component={SignupPageNumber} />
        <Stack.Screen name="SignupPagePass" component={SignupPagePass} />
        <Stack.Screen name="SignupPageGender" component={SignupPageGender} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
