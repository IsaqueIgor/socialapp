import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {Transition} from 'react-native-reanimated';

import LoginScreen from './src/screens/Login';
import LoadingScreen from './src/screens/Loading';
import HomeScreen from './src/screens/Home';
import RegisterScreen from './src/screens/Register';
import MessageScreen from './src/screens/Message';
import NotificationScreen from './src/screens/Notification';
import PostScreen from './src/screens/Post';
import ProfileScreen from './src/screens/Profile';

import firebaseConfig from './configDB';
import * as firebase from 'firebase';

import Icons from 'react-native-vector-icons/Entypo';

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icons name="home" size={24} color={tintColor} />
        ),
      },
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icons name="chat" size={24} color={tintColor} />
        ),
      },
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icons
            name="new-message"
            size={48}
            color="#E9446A"
            style={{
              shadowColor: '#E9446A',
              shadowOffset: {width: 0, height: 10},
              shadowRadius: 10,
              shadowOpacity: 0.3,
            }}
          />
        ),
      },
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icons name="notification" size={24} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icons name="user" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#161F3D',
      inactiveTintColor: '#B8BBC4',
      showLabel: false,
      headerShown: false,
    },
  },
);

const App = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
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
