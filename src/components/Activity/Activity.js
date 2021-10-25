import React from 'react';

import {
  Container,
  FooterActivity,
  LineTopFooter,
  Line,
  TextTemp,
  NumberTemp,
  OtherNames,
  ContainerTextTemp,
  LeftText,
  TextDist,
  TempDist,
  RightText,
  TextVel,
  TempVel,
  ButtonFooter,
  TextButton,
} from './Styles';

export default function Activity(props) {
  return (
    <Container>
      <FooterActivity>
        <LineTopFooter>
          <Line />
        </LineTopFooter>
        <ContainerTextTemp>
          <TextTemp>tempo</TextTemp>
          <NumberTemp>00:00:02</NumberTemp>
        </ContainerTextTemp>
        <OtherNames>
          <LeftText>
            <TextDist>distância</TextDist>
            <TempDist>00:00:02</TempDist>
          </LeftText>
          <RightText>
            <TextVel>velocidade(km/h)</TextVel>
            <TempVel>31.1</TempVel>
          </RightText>
        </OtherNames>

        <ButtonFooter
          onPress={() => {
            props.clickActivityButton();
          }}>
          <TextButton>Parar</TextButton>
        </ButtonFooter>
      </FooterActivity>
    </Container>
  );
}
