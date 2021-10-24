import React from 'react';

import {
  Container,
  ButtonsFooterTop,
  ButtonFooter,
  TextButton,
  ViewButton,
} from './Styles';

import {useNavigation} from '@react-navigation/native';

import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Footer() {
  const size = 20;
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonsFooterTop>
        <IconFontAwesome5 name="route" size={size} color="#000000" />
        <MaterialIcons name="bike" size={size} color="#000000" />
        <IconFontAwesome5 name="mountain" size={size} color="#000000" />
        <MaterialIcons name="clipboard" size={size} color="#000000" />
      </ButtonsFooterTop>
      <ViewButton>
        <ButtonFooter onPress={() => navigation.navigate('Activity')}>
          <TextButton>Iniciar atividade</TextButton>
          <MaterialIcons
            name="arrow-right"
            size={size}
            color="#FFFFFF"
            style={{paddingTop: 17, paddingRight: 15}}
          />
        </ButtonFooter>
      </ViewButton>
    </Container>
  );
}

export default Footer;
