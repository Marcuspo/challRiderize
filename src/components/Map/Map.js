import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform, View} from 'react-native';
import MapView from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

export default function Map() {
  const [latitude, setLatitude] = useState(-5.0);
  const [longitude, setLongitude] = useState(-42.0);

  useEffect(() => {
    callLocation();
  });

  function callLocation() {
    if (Platform === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
        }
      };
      requestLocationPermission();
    }
  }

  function getLocation() {
    Geolocation.getCurrentPosition(
      position => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;

        setLongitude(userLongitude);
        setLatitude(userLatitude);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000},
    );
  }

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        userInterfaceStyle="dark"
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.000922,
          longitudeDelta: 0.000421,
        }}
        showUserLocationButton
        followsUserLocation
        showsUserLocation
        zoomControlEnabled
      />
    </View>
  );
}
