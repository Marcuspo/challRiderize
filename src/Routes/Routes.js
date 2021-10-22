import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';

import Home from '../Home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pedalada"
          component={Home}
          options={{
            headerShadowVisible: false,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },

            headerRight: () => (
              <IconFeather
                name="settings"
                size={20}
                color="#000000"
                style={{paddingRight: 5}}
              />
            ),
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Icon
                name="arrow-left"
                size={20}
                color="#000000"
                style={{paddingLeft: 5}}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
