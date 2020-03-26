import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Container from '~/components/Container';
import Header from '~/components/Header';
import ForecastDetails from '~/components/ForecastDetails';
import Links from '~/components/Links';
import {theme} from '~/styles/index';
import Api from '~/services/api';

export default function Main() {
  const [hourForecast, setHourForecast] = useState(null);
  const [curretForecast, setCurrentForecast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.get(
      'weather?id=3395473&units=metric&&appid=a53195231677331f8533d1b866e30828',
    )
      .then(res => {
        setCurrentForecast(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.tron.log('error: ', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    Api.get(
      'forecast?id=3395473&units=metric&&appid=a53195231677331f8533d1b866e30828',
    )
      .then(res => {
        setHourForecast(res.data);
      })
      .catch(error => {
        console.tron.log('error: ', error);
      });
  }, []);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Header
            headerLeft={<Feather name="menu" size={23} color={theme.title} />}
            title="Previsão do Tempo"
          />
          <ForecastDetails data={curretForecast} />
          <Links />
        </>
      )}
    </Container>
  );
}

// Implementar loading
// https://reactnativeexample.com/a-customizable-skeleton-like-loading-placeholder-for-react-native-projects/
