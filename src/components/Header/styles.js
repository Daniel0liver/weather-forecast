import styled, {css} from 'styled-components/native';
import {Platform} from 'react-native';
import {theme, metrics} from '~/styles';

export const Container = styled.View`
  ${Platform.select({
    ios: css`
      height: ${metrics.heightPercentageToDP('8.5%')}px;
      width: ${metrics.widthPercentageToDP('100%')}px;
    `,
    android: css`
      height: ${metrics.heightPercentageToDP('8.2%')}px;
      width: ${metrics.widthPercentageToDP('100%')}px;
    `,
  })};
`;

export const Content = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerTitle = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: 400;
  color: ${theme.title};
`;

export const Right = styled.View`
  position: absolute;
  right: ${metrics.widthPercentageToDP('5%')}px;
`;

export const Left = styled.View`
  position: absolute;
  left: ${metrics.widthPercentageToDP('5%')}px;
`;
