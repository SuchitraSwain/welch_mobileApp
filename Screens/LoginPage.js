import React from 'react';
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
import {Formik} from 'formik';
import * as Yup from 'yup';

const LoginPage = ({navigation}) => {
  const phoneRegex = RegExp(
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
  );
  const loginValidationSchema = Yup.object().shape({
    emailOrPhone: Yup.string().when('isEmail', {
      is: '1',
      then: Yup.string()
        .email('Please enter valid email')
        .required('email cannot be empty'),
      otherwise: Yup.string()
        .matches(phoneRegex, 'Phone number is not valid')
        .required('Phone is required'),
    }),
    password: Yup.string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>WELCOME</Text>
          <Image
            source={require('../assets/LoginBanner.jpeg')}
            resizeMode="contain"
            style={{height: 400, alignSelf: 'center'}}
          />
          <Formik
            initialValues={{emailOrPhone: '', isEmail: 0, password: ''}}
            validationSchema={loginValidationSchema}
            onSubmit={values => console.log(values)}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View>
                <TextInput
                  placeholder="Email Address or Phone Number"
                  placeholderTextColor="#232323"
                  name="emailOrPhone"
                  style={styles.textInput}
                  onChangeText={event => {
                    handleChange('emailOrPhone')(event);
                    if (Number(values.emailOrPhone)) {
                      handleChange('isEmail')('0');
                    } else {
                      handleChange('isEmail')('1');
                    }
                  }}
                  onBlur={handleBlur('emailOrPhone')}
                  value={values.emailOrPhone}
                />
                {errors.emailOrPhone && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    {errors.emailOrPhone}
                  </Text>
                )}
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
                <Pressable style={styles.button} onPress={handleSubmit}>
                  <Text style={[styles.text, {color: 'white'}]}>LOGIN</Text>
                </Pressable>
              </View>
            )}
          </Formik>

          <Text
            style={[
              styles.text,
              {fontSize: 13, marginTop: 15, alignSelf: 'center'},
            ]}>
            <Text style={{textDecorationLine: 'underline'}}>
              Forgot Password?
            </Text>
            {'   '}Recover Account
          </Text>
          <Pressable style={[styles.button, {marginTop: 15}]} onPress={()=>{navigation.navigate("SignUpPageName")}}>
            <Text style={[styles.text, {color: 'white'}]}>SIGN UP</Text>
          </Pressable>
          <Text
            style={[
              styles.text,
              {fontSize: 13, marginTop: 15, alignSelf: 'center'},
            ]}>
            Create a new account
          </Text>
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
    marginHorizontal: 20,
    marginTop: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    color: 'black',
  },
  button: {
    backgroundColor: '#26D928',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginTop: 25,
    alignSelf: 'center',
  },
});
export default LoginPage;
