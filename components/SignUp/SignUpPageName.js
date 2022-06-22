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
  TouchableOpacity
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
const SignUpPageName = ({navigation}) => {
  const loginValidationSchema = Yup.object().shape({
    fname: Yup.string().required('This field is required'),
    lname: Yup.string().required('This field is required'),
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{marginTop: 30, padding: 20}}>
          <Formik
            initialValues={{fname: '', lname: ''}}
            validationSchema={loginValidationSchema}
            onSubmit={values => {
              console.log(values);
              navigation.navigate('SignupPageEmail');
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View>
                <Text style={styles.text}>Enter Your Name</Text>
                <TextInput
                  name="fname"
                  placeholder="First Name"
                  placeholderTextColor="#232323"
                  style={styles.textInput}
                  value={values.fname}
                  autoCorrect={true}
                  onChangeText={handleChange('fname')}
                  onBlur={handleBlur('fname')}
                />
                {errors.fname && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    {errors.fname}
                  </Text>
                )}
                <TextInput
                  name="lname"
                  placeholder="Last Name"
                  placeholderTextColor="#232323"
                  style={styles.textInput}
                  value={values.lname}
                  onChangeText={handleChange('lname')}
                  onBlur={handleBlur('lname')}
                  autoCorrect={true}
                />
                {errors.lname && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    {errors.lname}
                  </Text>
                )}
                <TouchableOpacity style={styles.forwardButton} onPress={handleSubmit}>
                  <Text
                    style={[styles.text, {fontSize: 18, fontWeight: 'bold'}]}>
                    {'>'}
                  </Text>
                </TouchableOpacity>
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
});
export default SignUpPageName;
