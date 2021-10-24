import React from 'react';
import {View} from 'react-native';
import Footer from './Footer/Footer';
import Map from './Map/Map';
import TabBar from './TabBar/TabBar';

export default function Index() {
  return (
    <View style={{flex: 1}}>
      <TabBar />
      <Map />
      <Footer />
    </View>
  );
}
