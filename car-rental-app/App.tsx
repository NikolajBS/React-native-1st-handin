import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RentalScreen from './screens/RentalScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import { ThemeProps } from './types/ThemeProps';
import { LanguageProps } from './types/LanguageProps';
import { ActiveSettingsProps } from './types/ActiveSettingsProps';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();


function TabNavigator({ activeSettings, setActiveSettings }: ActiveSettingsProps) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#c4c4c4'
        }
      }}>
      <Tab.Screen name="Home" component={StackNavigator} options={{
        tabBarStyle: { backgroundColor: '#a4a4a4' },
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <FontAwesome name="home" color={'#000000'} size={40} />
        ),
      }} />
      <Tab.Screen name="Settings" options={{
        tabBarLabel: 'Settings',
        tabBarIcon: () => (
          <FontAwesome name="cog" color={'#000000'} size={40} />
        ),
      }}>
        {props => <SettingsScreen {...props} activeSettings={activeSettings} setActiveSettings={setActiveSettings}/>}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
        headerShown: false,
      }} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Rental' component={RentalScreen} />
    </Stack.Navigator>
  )
}

export default function App() {

  const [theme, setTheme] = useState({
    backgroundColor: 'lightgray',
    textColor: 'black',
    buttonColor: '#A5CAFF',
    iconColor: 'black',
  });

  const [language, setLanguage] = useState<string>('English');

  const [activeSettings, setActiveSettings] = useState({
    themes: {
      darkMode: false,
      theme,
      setTheme,
    },
    languages: {
      language,
      setLanguage,
    },
  });

  return (
    <NavigationContainer>
      <TabNavigator activeSettings={activeSettings} setActiveSettings={setActiveSettings}/>
    </NavigationContainer>
  );
}