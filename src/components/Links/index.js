import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '~/styles/index';

import {Container, Buttom, ButtomNext7Day, Title, CustomTitle} from './styles';

export default function Links() {
  return (
    <Container>
      <Buttom>
        <Title>Hoje</Title>
      </Buttom>
      <Buttom>
        <Title>Amanhã</Title>
      </Buttom>
      <ButtomNext7Day>
        <CustomTitle>Proximos 7 dias</CustomTitle>
        <Entypo name="chevron-small-right" size={22} color={theme.cloudy} />
      </ButtomNext7Day>
    </Container>
  );
}
