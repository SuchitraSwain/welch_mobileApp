import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import SignupImageText from '../components/SignUp/SignupImageText';
import * as Yup from 'yup';
import {Formik} from 'formik';

const SignupPagePass = ({navigation}) => {
  const loginValidationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match',
    ).required("This is required"),
  });
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        <SignupImageText />
        <View style={{marginTop: 30, padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>emailid000@gmail.com</Text>
            <Image
              source={require('../assets/checkMarkIcon.png')}
              style={{height: 20, width: 20}}
              resizeMode="contain"
            />
          </View>
          <Formik
            initialValues={{confirmPassword: '', password: ''}}
            validationSchema={loginValidationSchema}
            onSubmit={values => {console.log(values);
              navigation.navigate("SignupPageGender")}}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View>
                <TextInput
                  name="password"
                  placeholder="Password"
                  textContentType="password"
                  placeholderTextColor="#232323"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={true}
                  autoCorrect={false}
                />
                {errors.password && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    {errors.password}
                  </Text>
                )}
                <TextInput
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  textContentType="password"
                  placeholderTextColor="#232323"
                  style={styles.textInput}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  autoCorrect={false}
                />
                {errors.confirmPassword && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    {errors.confirmPassword}
                  </Text>
                )}
                <Pressable style={styles.forwardButton} onPress={handleSubmit}>
                  <Text
                    style={[styles.text, {fontSize: 18, fontWeight: 'bold'}]}>
                    {'>'}
                  </Text>
                </Pressable>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
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
  textInput: {
    alignSelf: 'stretch',
    marginTop: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    color: 'black',
  },
  forwardButton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 15,
    backgroundColor: '#a4a4a4',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  otpContainer: {
    backgroundColor: '#e0dcdc',
    height: 70,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
});
export default SignupPagePass;
