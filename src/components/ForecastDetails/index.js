import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {theme} from '~/styles/index';
import Icon from '~/assets/icons/weatherIcon';
import {formatDate, formatTemperature} from '~/utils/index';
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

export default function ForecastDetails({data}) {
  return (
    <Card>
      <Header>
        <Icons>
          <Icon color={theme.cloudy} size={40} name="wi-rain" />
        </Icons>
        <Info>
          <DateTitle>Hoje</DateTitle>
          <Date>{formatDate()}</Date>
        </Info>
      </Header>
      <Body>
        <WeatherInfo>
          <Temperature>{formatTemperature(data.main.temp)}</Temperature>
          <Scale>
            <Icon color={theme.title} size={45} name="wi-celsius" />
          </Scale>
        </WeatherInfo>
        <Locality>
          {data.name} - {data.sys.country}
        </Locality>
        <MoreInfo>
          <Content>
            <Icon color={theme.cloudy} size={30} name="wi-humidity" />
            <Humidity>{data.main.humidity}%</Humidity>
          </Content>
          <Fontisto name="ellipse" size={5} color={theme.title} />
          <Content>
            <Icon color={theme.cloudy} size={30} name="wi-cloudy-windy" />
            <Winds>{data.wind.speed} km</Winds>
          </Content>
        </MoreInfo>
      </Body>
    </Card>
  );
}
