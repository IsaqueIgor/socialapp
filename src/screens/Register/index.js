import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import * as firebase from 'firebase';

import Icons from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';

Icons.loadFont();

const Register = ({navigation}) => {
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

  const handleNavigatetoSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Icons name="left" size={26} color="#8A8F9E" />
      </TouchableOpacity>
      <View
        style={{
          top: 64,
          alignItems: 'center',
          width: '100%',
        }}>
        <Text style={styles.greeting}>{'Hello!\nSign up to get started.'}</Text>
        <TouchableOpacity style={styles.avatar}>
          <Icons name="plus" size={40} />
        </TouchableOpacity>
      </View>

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

      <TouchableOpacity
        style={{alignSelf: 'center', marginTop: 32}}
        onPress={handleNavigatetoSignIn}>
        <Text style={{color: '#414959', fontSize: 13}}>
          Already have an account?{' '}
          <Text style={{fontWeight: '500', color: '#3221B7'}}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
