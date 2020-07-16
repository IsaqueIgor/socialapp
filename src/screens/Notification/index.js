import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, LayoutAnimation} from 'react-native';
import * as firebase from 'firebase';

import {styles} from './styles';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
    </View>
  );
};

export default Notification;
