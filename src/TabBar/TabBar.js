import React from 'react';
import {StatusBar, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';

import {TabBarContainer, Container, TextTab} from './Styles';

export default function TabBar() {
  return (
    <Container>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <TabBarContainer>
        <Icon
          name="arrow-left"
          size={20}
          color="#000000"
          style={{paddingLeft: 20}}
        />
        <TextTab>Pedalada</TextTab>
        <IconFeather
          name="settings"
          size={20}
          color="#000000"
          style={{paddingRight: 20}}
        />
      </TabBarContainer>
    </Container>
  );
}
