import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import * as firebase from 'firebase';

import {styles} from './styles';

const Post = ({navigation}) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handlePost = () => {
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} />
    </SafeAreaView>
  );
};

export default Post;
