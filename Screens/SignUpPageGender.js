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
import {Formik} from 'formik';
import DatePicker from 'react-native-date-picker';
import {Dropdown} from 'react-native-element-dropdown';
const SignupPageGender = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  let genders = [
    {label: 'Male', value: 'Male'},
    {
      label: 'Female',
      value: 'Female',
    },
    {
      label: 'Others',
      value: 'Others',
    },
  ];
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
            <Text style={styles.text}>Other Details</Text>
          </View>
          <Formik
            initialValues={{birthDay: '', gender: ''}}
            onSubmit={values => {
              if (values.birthDay != '' && values.gender != '') {
                console.log(values);
              } else {
                alert('Please check the fields');
              }
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View>
                <Text style={[styles.text, {marginTop: 25, color: 'grey'}]}>
                  Date of Birth
                </Text>
                <TextInput
                  name="birthDay"
                  onPressIn={() => setOpen(true)}
                  placeholder="mm/dd/yy"
                  placeholderTextColor="#232323"
                  style={styles.textInput}
                  value={date.toDateString()}
                  autoCorrect={false}
                />
                <DatePicker
                  modal
                  mode="date"
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                    values.birthDay = date.toDateString();
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
                <Text style={[styles.text, {marginTop: 25, color: 'grey'}]}>
                  Gender
                </Text>
                <Dropdown
                  data={genders}
                  valueField="value"
                  labelField="label"
                  fontFamily="roboto"
                  inputSearchStyle={styles.text}
                  placeholderStyle={styles.text}
                  selectedTextStyle={styles.text}
                  containerStyle={{backgroundColor: 'grey'}}
                  onChange={item => {
                    values.gender = item.value;
                  }}
                />
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
export default SignupPageGender;
