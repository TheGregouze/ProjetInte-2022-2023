import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';


import AuthNavigator from './src/navigations/AuthNavigator';
import { Home } from './src/screens';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';



import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);
// False Error Message remover

export default function App() {
  // isAuthenticated = is...
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
