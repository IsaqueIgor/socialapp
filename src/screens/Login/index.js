import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import * as firabase from 'firebase';

import {styles} from './styles';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = () => {
    firabase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => setErrorMessage({errorMessage: err.message}));
  };

  const handleNavigatetoSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{'Hello . \n Welcome back'}</Text>

      <View style={styles.errorMessage}>
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      </View>

      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            autoCorrect={false}
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(mail) => setEmail({mail})}
            placeholder="youremail@whatever.com"
            value={email}
          />
        </View>

        <View style={{marginTop: 32}}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(pass) => setPassword({pass})}
            value={password}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{color: '#FFF', fontWeight: '500'}}> Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{alignSelf: 'center', marginTop: 32}}
        onPress={handleNavigatetoSignUp}>
        <Text style={{color: '#414959', fontSize: 14}}>
          New to Sociale?{' '}
          <Text style={{fontWeight: '500', color: '#E9446A'}}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
