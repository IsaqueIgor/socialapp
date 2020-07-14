import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/stack';

import * as firabase from 'firebase';

import {styles} from './styles';

const Loading = ({navigation}) => {
  const navigation = useNavigation();

  useEffect(() => {
    firabase.auth().onAuthStateChanged((user) => {
      navigation.navigate(user ? 'App' : 'Auth');
    });
  });

  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
