import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import * as firabase from 'firebase';

import './styles';

export default class Loading extends React.Component {
  render() {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
}
