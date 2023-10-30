import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RentalScreen from './screens/RentalScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import { ActiveSettingsProps } from './types/ActiveSettingsProps';
import { ActiveSettingsContext } from './contexts/ActiveSettingsContext';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();


function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#335c67'
        }
      }}>
      <Tab.Screen name="Home" component={StackNavigator} options={{
        tabBarStyle: { backgroundColor: '#335c67'},
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <FontAwesome name="home" color={'#FFFFFF'} size={40} />
        ),
      }} />{/*
      <Tab.Screen name="Settings" component={StackNavigator} options={{
        tabBarStyle: { backgroundColor: '#335c67'},
        tabBarLabel: 'Settings',
        tabBarIcon: () => (
          <FontAwesome name="cog" color={'#FFFFFF'} size={40} />
        ),
      }}/>*/}
    </Tab.Navigator>
  )
}

function StackNavigator() {
  //const { activeSettings }: ActiveSettingsProps = React.useContext(ActiveSettingsContext);
  //const { setActiveSettings }: ActiveSettingsProps = React.useContext(ActiveSettingsContext);

  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Rental' component={RentalScreen} />
      <Stack.Screen name='SettingsScreen' component={SettingsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default function App() {
  
  const [theme, setTheme] = useState({
    backgroundColor: '#B28440',
    containerColor: '#F0AA42', //orange
    textColor: 'black',
    buttonColor: '#E0A450',
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
    <ActiveSettingsContext.Provider value={{ activeSettings, setActiveSettings }}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ActiveSettingsContext.Provider>
  );
}