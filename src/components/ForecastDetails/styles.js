import styled from 'styled-components/native';
import {theme} from '~/styles/index';
export const Card = styled.View`
  width: 100%;
  height: 40%;
  justify-content: space-evenly;
`;

export const Header = styled.View`
  width: 100%;
  height: 23%;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const Icons = styled.View`
  justify-content: center;
  padding: 0px 7px;
`;

export const Info = styled.View`
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0px 7px;
`;

export const DateTitle = styled.Text`
  color: ${theme.title};
  font-size: 18px;
`;

export const Date = styled.Text`
  color: ${theme.subtitle};
  font-size: 12px;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

export const Wind = styled.View`
  flex-direction: row;
`;

export const Scale = styled.View`
  justify-content: flex-start;
  padding-top: 10px;
`;

export const Temperature = styled.Text`
  font-size: 90px;
  color: ${theme.title};
  font-weight: 200;
  font-family: 'HelveticaNeue-Thin';
`;

export const WeatherInfo = styled.Text`
  color: ${theme.subtitle};
  font-size: 18px;
  font-weight: 300;
  font-family: 'HelveticaNeue-Thin';
`;

export const Umidity = styled.Text`
  color: ${theme.subtitle};
  font-size: 18px;
  font-weight: 300;
  font-family: 'HelveticaNeue-Thin';
`;
