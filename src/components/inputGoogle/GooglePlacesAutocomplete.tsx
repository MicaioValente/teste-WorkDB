import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function GooglePlacesInput () {

  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
      }}
      query={{
        key: 'AIzaSyDr1NlnDt-nwzr6PgfLpm6jfoYN8yd_2ns',
        language: 'pt_br',
      }}
    />
  );
};
