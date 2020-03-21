import React from 'react';

import {Container, Content, ContainerTitle, Title, Left, Right} from './styles';

export default function Header({
  style,
  children,
  title,
  headerLeft,
  headerRight,
}) {
  return (
    <Container style={style}>
      <Content>
        <ContainerTitle>
          {headerLeft !== null ? <Left>{headerLeft}</Left> : null}

          {title !== null ? <Title>{title}</Title> : null}

          {headerRight !== null ? <Right>{headerRight}</Right> : null}
        </ContainerTitle>
        {children}
      </Content>
    </Container>
  );
}

Header.defaultProps = {
  title: null,
  headerLeft: null,
  headerRight: null,
  style: {},
  children: null,
};
