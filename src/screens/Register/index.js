import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import * as firebase from 'firebase';

import Icons from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';

Icons.loadFont();

const Register = ({navigation}) => {
  const [user, setUser] = useState({
    user: {
      name: '',
      email: '',
      password: '',
      avatar: null,
    },
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const imagePickerOptions = {
    title: 'Select an Image',
    customButtons: [
      {
        name: 'fb',
        title: 'Selecione uma imagem do facebook',
      },
      {
        name: 'ig',
        title: 'Selecione uma imagem do instagram',
      },
    ],
  };

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: user.name,
        });
      })
      .catch((error) => setErrorMessage({errorMessage: error.message}));
  };

  const handleNavigatetoSignIn = () => {
    navigation.navigate('Login');
  };

  const handlePickAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setUser({user: {...user, avatar: result.uri}});
    }
  };

  function imagePickerCallback(data) {
    if (data.didCancel) {
      return;
    }

    if (data.error) {
      return;
    }

    if (data.customButton) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setUser({user: {...user, avatar: data}});
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Icons name="left" size={26} color="#050308" />
      </TouchableOpacity>
      <View
        style={{
          top: 64,
          alignItems: 'center',
          width: '100%',
        }}>
        <Text style={styles.greeting}>{'Hello!\nSign up to get started.'}</Text>
        <TouchableOpacity
          style={styles.avatarPlaceholder}
          onPress={() =>
            ImagePicker.showImagePicker(imagePickerOptions, imagePickerCallback)
          }>
          <Image source={{uri: user.avatar}} style={styles.avatar} />
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
            onChangeText={(value) => setUser({user: {...user, name: value}})}
            value={user.name}
          />
        </View>

        <View style={{marginTop: 32}}>
          <Text style={styles.inputTitle}>Email Address</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(value) => setUser({user: {...user, email: value}})}
            value={user.email}
          />
        </View>

        <View style={{marginTop: 32}}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(value) =>
              setUser({user: {...user, password: value}})
            }
            value={user.password}
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
