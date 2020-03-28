import React from 'react';
import {FlatList} from 'react-native';
import {theme} from '~/styles/index';
import Icon from '~/assets/icons/weatherIcon';

import {Container, ContainerItem, Hour, IconView, Temp} from './styles';

export default function WeatherList({data}) {
  console.tron.log('Data', data);

  const weatherData = [
    {
      hour: '12 PM',
      icon: <Icon color={theme.cloudy} size={30} name="wi-rain" />,
      temp: '26˚C',
    },
    {
      hour: '14 PM',
      icon: <Icon color={theme.cloudy} size={30} name="wi-rain" />,
      temp: '27˚C',
    },
    {
      hour: '17 PM',
      icon: <Icon color={theme.sunny} size={30} name="wi-day-sunny" />,
      temp: '31˚C',
    },
  ];

  return (
    <Container>
      <FlatList
        data={weatherData}
        horizontal={true}
        renderItem={item => (
          <ContainerItem>
            <Hour>{item.item.hour}</Hour>
            <IconView>{item.item.icon}</IconView>
            <Temp>{item.item.temp}</Temp>
          </ContainerItem>
        )}
      />
    </Container>
  );
}
