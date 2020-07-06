import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import * as firabase from 'firebase';

import {styles} from './styles';

const Loading = () => {
  // useEffect(() => {
  //   firabase.auth().onAuthStateChanged((user) => {
  //     this.props.navigation.navigate(user ? 'App' : 'Auth');
  //   });
  // });

  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

export default Loading;
