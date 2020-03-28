import styled from 'styled-components/native';
import {metrics, theme} from '~/styles/index';

export const Container = styled.View`
  width: ${metrics.widthPercentageToDP('100%')}px;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0px;
`;

export const ContainerItem = styled.View`
  padding: 30px 30px;
  justify-content: center;
  align-items: center;
`;

export const Hour = styled.Text`
  color: ${theme.title};
  font-size: 16px;
`;

export const IconView = styled.View`
  padding: 10px 0px;
`;

export const Temp = styled.Text`
  color: ${theme.title};
  font-size: 16px;
`;
