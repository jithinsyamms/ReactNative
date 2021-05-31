import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import AccountScreen from './src/screens/AccountScreen'
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import TrackCreate from './src/screens/TrackCreate'
import TrackList from './src/screens/TrackList'
import TrackDetail from './src/screens/TrackDetail'
import SplashScreen from './src/screens/SplashScreen'
import { AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef'
import {LocationProvider} from './src/context/LocationContext'
import {TrackProvider} from './src/context/TrackContext'
import {FontAwesome} from '@expo/vector-icons'

const trackListFlow = createStackNavigator({
  TrackList:TrackList,
  TrackDetail:TrackDetail
});


trackListFlow.navigationOptions = {
  title:"Tracks",
  tabBarIcon:<FontAwesome name="th-list" size = {20}/>
 };

const switchNavigator = createSwitchNavigator(
  {
    splash:SplashScreen,

    loginFlow:createStackNavigator({
      Signup:SignupScreen,
      Signin:SigninScreen
    }),

    mainFlow:createBottomTabNavigator({
      trackListFlow:trackListFlow,
      CreateTrack:TrackCreate,
      Account:AccountScreen
    })
  }
);


const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref = {(navigator) => setNavigator(navigator)} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};




