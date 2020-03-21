import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '~/styles/index';
import Icon from '~/assets/icons/weatherIcon';
import {
  Card,
  Header,
  Body,
  Wind,
  Temperature,
  Scale,
  WeatherInfo,
  Umidity,
  Icons,
  Date,
  DateTitle,
  Info,
} from './styles';

export default function ForecastDetails() {
  return (
    <Card>
      <Header>
        <Icons>
          <Icon color={theme.cloudy} size={34} name="wi-rain" />
        </Icons>

        <Info>
          <DateTitle>Hoje</DateTitle>
          <Date>Sáb, 05 Março</Date>
        </Info>
      </Header>
      <Body>
        <Wind>
          <Temperature>28</Temperature>
          <Scale>
            <Icon color={theme.title} size={45} name="wi-celsius" />
          </Scale>
        </Wind>
        <WeatherInfo>Fortaleza - CE</WeatherInfo>
        <Umidity>Teste</Umidity>
      </Body>
    </Card>
  );
}
