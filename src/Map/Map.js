import React from 'react';
import {Text, View} from 'react-native';
import MapView from 'react-native-maps';

function Map() {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: -5.0961,
          longitude: -42.8023,
          latitudeDelta: 0.01922,
          longitudeDelta: 0.01421,
        }}
        showsMyLocationButton
        loadingEnabled
        zoomControlEnabled
      />
    </View>
  );
}

export default Map;
