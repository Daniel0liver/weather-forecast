import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {theme} from '~/styles/index';
import Icon from '~/assets/icons/weatherIcon';
import {
  Card,
  Header,
  Icons,
  Date,
  DateTitle,
  Body,
  WeatherInfo,
  Temperature,
  Scale,
  Info,
  Locality,
  MoreInfo,
  Content,
  Humidity,
  Winds,
} from './styles';

export default function ForecastDetails() {
  return (
    <Card>
      <Header>
        <Icons>
          <Icon color={theme.cloudy} size={40} name="wi-rain" />
        </Icons>
        <Info>
          <DateTitle>Hoje</DateTitle>
          <Date>Sáb, 05 Março</Date>
        </Info>
      </Header>
      <Body>
        <WeatherInfo>
          <Temperature>28</Temperature>
          <Scale>
            <Icon color={theme.title} size={45} name="wi-celsius" />
          </Scale>
        </WeatherInfo>
        <Locality>Fortaleza - CE</Locality>
        <MoreInfo>
          <Content>
            <Icon color={theme.cloudy} size={30} name="wi-humidity" />
            <Humidity>87%</Humidity>
          </Content>
          <Fontisto name="ellipse" size={5} color={theme.title} />
          <Content>
            <Icon color={theme.cloudy} size={30} name="wi-cloudy-windy" />
            <Winds>30 km</Winds>
          </Content>
        </MoreInfo>
      </Body>
    </Card>
  );
}
