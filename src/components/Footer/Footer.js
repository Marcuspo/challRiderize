import React, {useState} from 'react';

import {
  Container,
  ButtonsFooterTop,
  ButtonFooter,
  TextButton,
  ViewButton,
  ContainerFooter,
} from './Styles';

import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Activity from '../Activity/Activity';

function Footer() {
  const size = 20;

  const [activityOn, setActivityOn] = useState(true);

  const clickActivityButton = () => {
    setActivityOn(true);
  };

  return (
    <>
      {activityOn ? (
        <Container>
          <ContainerFooter>
            <ButtonsFooterTop>
              <IconFontAwesome5 name="route" size={size} color="#000000" />
              <MaterialIcons name="bike" size={size} color="#000000" />
              <IconFontAwesome5 name="mountain" size={size} color="#000000" />
              <MaterialIcons name="clipboard" size={size} color="#000000" />
            </ButtonsFooterTop>
            <ViewButton>
              <ButtonFooter
                onPress={() => {
                  setActivityOn(false);
                }}>
                <TextButton>Iniciar atividade</TextButton>
                <MaterialIcons
                  name="arrow-right"
                  size={size}
                  color="#FFFFFF"
                  style={{paddingTop: 17, paddingRight: 15}}
                />
              </ButtonFooter>
            </ViewButton>
          </ContainerFooter>
        </Container>
      ) : (
        <Activity
          setActivityOn={true}
          clickActivityButton={clickActivityButton}
        />
      )}
    </>
  );
}

export default Footer;
