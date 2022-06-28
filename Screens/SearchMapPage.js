import {StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {MaterialIcon} from '../components/icon';
const RightSearchIcon = () => {
  return (
    <TouchableOpacity style={{alignSelf: 'center'}}>
      <MaterialIcon size={30} color="grey" name="map-marker-outline" />
    </TouchableOpacity>
  );
};
const LeftSearchIcon = () => {
  return (
    <TouchableOpacity style={{alignSelf: 'center'}}>
      <MaterialIcon size={30} color="grey" name="magnify" />
    </TouchableOpacity>
  );
};
const SearchMapPage = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.SearchBar}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          listViewDisplayed={true}
          GooglePlacesSearchQuery={{
            rankby: 'distance',
          }}
          textInputProps={{
            placeholderTextColor: 'black',
            returnKeyType: 'search',
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          renderRightButton={RightSearchIcon}
          renderLeftButton={LeftSearchIcon}
          fetchDetails={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          query={{
            // AIzaSyBX1wlyFY9jqvnuVcJhliXArupsWqYsO0Y
            // AIzaSyCUQoLbBsZz1WWOIQKro8Kx8rzZuZyRPyo
            key: 'AIzaSyAfevgpvPNjRALaz3jPJNgE040p9GnH5o',
            language: 'en',
          }}
          minLength={2}
          styles={{
            container: {
              flex: 1,
              alignSelf: 'center',
            },
            textInput: {color: 'black'},
            listView: {backgroundColor: 'white'},
          }}
        />
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        initialRegion={{
          latitude: 19.076,
          longitude: 72.8777,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          paddingHorizontal: 25,
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}>
        <MaterialIcon size={35} color="black" name="qrcode-scan" />
        <MaterialIcon size={35} color="black" name="calendar-clock" />
        <MaterialIcon size={35} color="black" name="magnify" />
        <MaterialIcon size={35} color="black" name="bookmark-outline" />
        <MaterialIcon size={35} color="black" name="account-outline" />
      </View>
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
  SearchBar: {
    position: 'absolute',
    width: '95%',
    zIndex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    marginTop:15,
    paddingHorizontal:15,
    borderRadius:50
  },
});

export default SearchMapPage;
