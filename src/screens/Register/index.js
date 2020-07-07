import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';

import {styles} from './styles';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name,
        });
      })
      .catch((error) => this.setState({errorMessage: error.message}));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{'Hello!\nSign up to get started.'}</Text>

      <View style={styles.errorMessage}>
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>Full Name</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(value) => setName(value)}
            value={name}
          />
        </View>

        <View style={{marginTop: 32}}>
          <Text style={styles.inputTitle}>Email Address</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(value) => setEmail(value)}
            value={email}
          />
        </View>

        <View style={{marginTop: 32}}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(value) => setPassword(value)}
            value={password}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={{color: '#FFF', fontWeight: '500'}}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignSelf: 'center', marginTop: 32}}>
        <Text style={{color: '#414959', fontSize: 13}}>
          New to Sociale?{' '}
          <Text style={{fontWeight: '500', color: '#E9446A'}}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
