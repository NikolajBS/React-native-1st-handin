import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'; // Import your Home screen component
import RentalScreen from './screens/RentalScreen';
import Profile from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import { ActiveSettingsContext } from './contexts/ActiveSettingsContext';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#335c67'
        }
      }}>
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarStyle: { backgroundColor: '#335c67' },
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <FontAwesome name="home" color={'#FFFFFF'} size={40} />
          ),
        }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarStyle: { backgroundColor: '#335c67'},
        tabBarLabel: 'Settings',
        tabBarIcon: () => (
          <FontAwesome name="cog" color={'#FFFFFF'} size={40} />
        ),
      }}/>
    </Tab.Navigator>
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
        <Stack.Navigator>
          <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name='Rental' component={RentalScreen} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='SettingsScreen' component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ActiveSettingsContext.Provider>
  );


}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
