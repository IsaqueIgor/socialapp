import {Platform} from 'react-native';
import * as Permissions from 'expo-permissions';

class UserPermissions {
  getCameraPermission = async () => {
    if (Platform.OS === 'ios') {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status != 'granted') {
        alert(
          "We need permission to use your camera roll if you'd like to incude a photo.",
        );
      }
    }
  };
}

export default new UserPermissions();
