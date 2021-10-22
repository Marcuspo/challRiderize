import React from 'react';
import {StatusBar, Text, View} from 'react-native';

export default function Home() {
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <Text>Home Screen</Text>
    </View>
  );
}
