import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import SignupImageText from '../components/SignUp/SignupImageText';
import SignUpPageName from '../components/SignUp/SignUpPageName';
import SignupPageEmail from '../components/SignUp/SignUpPageEmail';
import SignupPageNumber from '../components/SignUp/SignUpPageNumber';
import SignupPagePass from '../components/SignUp/SignUpPagePass';
import SignupPageGender from '../components/SignUp/SignUpPageGender';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const SignupPage = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={{height: '60%'}}>
        <SignupImageText />
      </View>
      <Stack.Navigator initialRouteName="SignUpPageName">
        <Stack.Screen
          name="SignUpPageName"
          component={SignUpPageName}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignupPageEmail"
          component={SignupPageEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupPageNumber"
          component={SignupPageNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupPagePass"
          component={SignupPagePass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupPageGender"
          component={SignupPageGender}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
