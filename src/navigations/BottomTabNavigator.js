import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from '../constants';
import {Home, Wallet , Notifications, Settings, Horloge} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

function BottomTabNavigator() {

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          }  else if (route.name === ROUTES.HORLOGE) {
            iconName = focused ? 'alarm' : 'alarm-outline';
          } else if (route.name === ROUTES.SETTINGS) {
            iconName = focused ? 'settings' : 'settings-outline';
          } 
          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
      <Tab.Screen name={ROUTES.HORLOGE} component={Horloge} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;