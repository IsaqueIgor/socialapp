import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Transition} from 'react-native-reanimated';

import LoginScreen from './src/screens/Login';
import LoadingScreen from './src/screens/Loading';
import HomeScreen from './src/screens/Home';
import RegisterScreen from './src/screens/Register';

import firebaseConfig from './firebase';

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

const App = createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none',
    },
    {
      transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-bottom"
            durationMs={400}
            interpolation="easeIn"
          />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      ),
    },
  ),
);

export default App;
