import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Index from '../components/Index';
import RoutesComponent from '../components/RoutesComponent/RoutesComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Pedalada"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Pedalada" component={Index} />
        <Stack.Screen name="RoutesComponent" component={RoutesComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
