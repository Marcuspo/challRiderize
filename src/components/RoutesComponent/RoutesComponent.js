import React from 'react';
import {View, Image} from 'react-native';

import TabBar from '../TabBar/TabBar';

import Monitor from '../../assets/Img/monitor-routes.png';
import {Body, TextoAfterImage, SubtitleAfterImage} from './Styles';

function RoutesComponent() {
  return (
    <View>
      <TabBar />
      <Body>
        <Image
          source={Monitor}
          style={{
            width: 150,
            height: 150,
          }}
        />
        <TextoAfterImage>Crie suas próprias rotas</TextoAfterImage>
        <SubtitleAfterImage>
          Para gerenciar suas todas e criar rotas novas, visite{' '}
        </SubtitleAfterImage>
      </Body>
    </View>
  );
}

export default RoutesComponent;
