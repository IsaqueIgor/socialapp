import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, LayoutAnimation} from 'react-native';
import * as firebase from 'firebase';

import {styles} from './styles';

const Home = () => {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    const {userEmail, userDisplayName} = firebase.auth().currentUser;
    setEmail(userEmail);
    setDisplayName(userDisplayName);
  }, []);

  const signOutUser = () => {
    firebase.auth().signOut();
  };

  return (
    <View style={styles.container}>
      <Text>Hi {displayName}!</Text>

      <TouchableOpacity style={{marginTop: 32}} onPress={signOutUser}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
