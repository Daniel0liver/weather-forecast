import React from 'react';

import Container from '~/components/Container';
import Header from '~/components/Header';
import ForecastDetails from '~/components/ForecastDetails';
import Api from '~/services/api';

const teste = Api.get('?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
  .then(res => {
    console.tron.log('weather', res.data);
  })
  .catch(error => {
    console.tron.log('error: ', error);
  });

const Main = () => (
  <Container>
    <Header title="Previsão do Tempo" />
    <ForecastDetails />
  </Container>
);

export default Main;
