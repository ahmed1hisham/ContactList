import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContactListScreen from '../screens/ContactListScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {enableScreens} from 'react-native-screens';

enableScreens();

const Tab = createBottomTabNavigator();

const AppNavigator = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Contacts"
        component={ContactListScreen}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({color, size}) => (
            <Icon name="contacts" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color, size}) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
