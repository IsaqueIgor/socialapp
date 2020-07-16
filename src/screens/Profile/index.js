import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, LayoutAnimation} from 'react-native';
import * as firebase from 'firebase';

import {styles} from './styles';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
