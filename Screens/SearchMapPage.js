import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import MapView,{ PROVIDER_GOOGLE} from 'react-native-maps';
import React from 'react';
import {GooglePlacesAutocomplete , } from 'react-native-google-places-autocomplete';
const SearchMapPage = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          listViewDisplayed={true}
          GooglePlacesSearchQuery={{
            rankby: "distance"
          }}
          textInputProps={{
            placeholderTextColor:"black",
            returnKeyType:"search"
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
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
            container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
            textInput:{color:'black'},
            listView: { backgroundColor: "white" }
          }}
        />
      <MapView  
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        initialRegion={{
          latitude: 19.076,
          longitude: 72.8777,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
        <View style={{height:'8%'}}>
          
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
});

export default SearchMapPage;
