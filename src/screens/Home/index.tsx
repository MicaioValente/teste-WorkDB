import React from 'react';
import GooglePlacesAutocomplete from '../../components/GooglePlacesAutocomplete';
import * as S from './styles';

export default function Home({navigation}) {
  return (
    <S.Container>
      <GooglePlacesAutocomplete />

    </S.Container>
  );
}
