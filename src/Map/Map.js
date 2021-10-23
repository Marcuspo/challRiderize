import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform, Text, View} from 'react-native';
import MapView from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

function Map() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    callLocation();
  }, []);

  function callLocation() {
    if (Platform === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de acesso à localização',
            message:
              'Este aplicativo precisa acessar sua localizãção, mas é apenas isso!',
            buttonNeutral: 'Pergunta depois',
            buttonPositive: 'Vai lá!',
            buttonNegative: 'Não deixo!',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          alert('Aceita a permissão aí, pfvr');
        }
      };
      requestLocationPermission();
    }
  }

  async function getLocation() {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    Geolocation.watchPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01922,
          longitudeDelta: 0.01421,
        }}
        showUserLocationButton
        followsUserLocation
        showsUserLocation
        zoomControlEnabled
      />
    </View>
  );
}

export default Map;
