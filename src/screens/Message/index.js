import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, LayoutAnimation} from 'react-native';
import * as firebase from 'firebase';

import {styles} from './styles';

const Message = () => {
  return (
    <View style={styles.container}>
      <Text>Message</Text>
    </View>
  );
};

export default Message;
