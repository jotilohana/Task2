import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Shifts from '../src/screens/Shifts';
import Available from '../src/screens/AvailableShifts';

const Tabs = createBottomTabNavigator();
const TabsScreen = () => {
  return (
    <Tabs.Navigator
      // barStyle={{backgroundColor: '#0047AB'}}
      // tabBarOptions={{
      //   activeTintColor: 'blue',
      //   inactiveTintColor: 'grey',
      // }}
      screenOptions={{
        tabBarStyle: {height: 40},
        tabBarHideOnKeyboard: true,
      }}>
      <Tabs.Screen
        name="Shifts"
        component={Shifts}
        options={{
          headerShown: false,
          tabBarLabel: 'Shifts',
        }}
      />
      <Tabs.Screen
        name="Available"
        component={Available}
        options={{
          headerShown: false,
          tabBarLabel: 'Available',
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsScreen;
