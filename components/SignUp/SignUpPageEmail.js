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
  TouchableOpacity
} from 'react-native';
import {Formik} from 'formik';
import OTPTextView from 'react-native-otp-textinput';
import * as Yup from 'yup';

const SignupPageEmail = ({navigation}) => {
  const [isvalid, setIsvalid] = useState(false);
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter valid email')
      .required('email cannot be empty'),
  });
  return (
    <View style={{marginTop: 30, padding: 20}}>
      <ScrollView>
        <Text style={styles.text}>Verify Email</Text>
        <Formik
          initialValues={{email: '', otp: ''}}
          validationSchema={loginValidationSchema}
          onSubmit={values => {
            setIsvalid(true);
            if (isvalid && values.otp != '') {
              console.log(values);
              navigation.navigate('SignupPageNumber');
            }
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View>
              <TextInput
                name="email"
                placeholder="What's your email id?"
                placeholderTextColor="#232323"
                style={styles.textInput}
                autoCorrect={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                editable={!isvalid}
              />
              {errors.email && (
                <Text
                  style={{
                    fontSize: 10,
                    color: 'red',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {errors.email}
                </Text>
              )}
              {isvalid ? (
                <OTPTextView
                  containerStyle={{marginTop: 20}}
                  textInputStyle={styles.otpContainer}
                  handleTextChange={handleChange('otp')}
                />
              ) : (
                <></>
              )}
              <TouchableOpacity style={styles.forwardButton} onPress={handleSubmit}>
                <Text style={[styles.text, {fontSize: 18, fontWeight: 'bold'}]}>
                  {'>'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        {/*  */}
      </ScrollView>
    </View>
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
  },
});
export default SignupPageEmail;
