import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabBar from '../TabBar/TabBar';
import Activity from '../Activity/Activity';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Pedalada"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Pedalada" component={TabBar} />
        <Stack.Screen name="Activity" component={Activity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
