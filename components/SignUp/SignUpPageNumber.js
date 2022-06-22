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

const SignupPageNumber = ({navigation}) => {
  const phoneRegex = RegExp(
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
  );
  const [isvalid, setIsvalid] = useState(false);
  const loginValidationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(phoneRegex, 'Phone number is not valid')
      .min(10, 'Mobile Number should be atleast 10 characters')
      .required('Phone is required'),
  });
  return (
    <SafeAreaView >
      <ScrollView>
        <View style={{marginTop: 30, padding: 20}}>
          <Text style={styles.text}>Verify Mobile Number</Text>
          <Formik
            initialValues={{phoneNumber: '', otp: ''}}
            validationSchema={loginValidationSchema}
            onSubmit={values => {
              setIsvalid(true);
              if (isvalid && values.otp != '') {
                console.log(values);
                navigation.navigate("SignupPagePass")
              }
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View>
                <TextInput
                  name="phoneNumber"
                  placeholder="What's your mobile number?"
                  placeholderTextColor="#232323"
                  style={styles.textInput}
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                  editable={!isvalid}
                />
                {errors.phoneNumber && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    {errors.phoneNumber}
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity>
                    <Text style={[styles.text, {fontSize: 18}]}>SKIP</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.forwardButton}
                    onPress={handleSubmit}>
                    <Text
                      style={[styles.text, {fontSize: 18, fontWeight: 'bold'}]}>
                      {'>'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>

          {/*  */}
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
export default SignupPageNumber;
