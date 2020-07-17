import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  LayoutAnimation,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Fire from '../../../FireDB';

import Icons from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';

const Post = ({navigation}) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handlePost = () => {
    Fire.shared
      .addPost({text: this.state.text.trim(), localUri: this.state.image})
      .then((ref) => {
        this.setState({text: '', image: null});
        this.props.navigation.goBack();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name="back" size={24} color="#D8D9DB" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePost}>
          <Text style={{fontWeight: '500'}}>Post</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/tempAvatar.jpg')}
          style={styles.avatar}
        />
        <TextInput
          autoFocus={true}
          multiline={true}
          numberOfLines={4}
          style={{flex: 1}}
          placeholder="Want to share something?"
          onChangeText={(value) => setText(value)}
          value={text}
        />
      </View>
    </SafeAreaView>
  );
};

export default Post;
