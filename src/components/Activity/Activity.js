import React from 'react';
import Map from '../Map/Map';
import TabBar from '../TabBar/TabBar';

import {Container} from './Styles';

export default function Activity() {
  return (
    <Container>
      <TabBar />
      <Map />
      <FooterActivity></FooterActivity>
    </Container>
  );
}
