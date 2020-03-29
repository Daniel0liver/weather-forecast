import styled from 'styled-components/native';
import {metrics, theme} from '~/styles/index';

export const Container = styled.View`
  width: ${metrics.widthPercentageToDP('100%')}px;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0px;
`;

export const Buttom = styled.TouchableOpacity`
  padding: 20px 20px;
`;

export const ButtomNext7Day = styled(Buttom)`
  flex-direction: row;
  justify-content: center;
  padding: 20px 20px;
`;

export const CustomTitle = styled.Text`
  color: ${theme.cloudy};
  font-size: 16px;
  font-weight: 500;
  font-family: 'HelveticaNeue-Thin';
`;

export const Title = styled.Text`
  color: ${theme.subtitle};
  font-size: 16px;
  font-weight: 500;
  font-family: 'HelveticaNeue-Thin';
`;
