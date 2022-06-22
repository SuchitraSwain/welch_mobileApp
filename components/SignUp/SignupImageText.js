import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
const SignupImageText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>WELCOME</Text>
      <Image
        source={require('../../assets/LoginBanner.jpeg')}
        resizeMode="contain"
        style={{height: 400, alignSelf: 'center'}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  text: {
    color: 'black',
    fontFamily: 'Roboto',
  },
  welcome: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 50,
    textAlign: 'center',
  },
});
export default SignupImageText;
