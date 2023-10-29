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
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

/**
 * 
 * @returns 
 * <Tab.Screen name="Rent" component={} options={{
            tabBarIcon: () =>(
              <FontAwesome name="car" color={'#000000'} size={35} />
            ),
          }}/>
 */


function TabNavigator({ theme, setTheme }: ThemeProps){
  return(
    <Tab.Navigator 
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#c4c4c4'
            }
          }}>
          <Tab.Screen name="Home" component={StackNavigator} options={{
            tabBarStyle: { backgroundColor: '#a4a4a4'},
            tabBarLabel: 'Home', 
            tabBarIcon: () => (
            <FontAwesome name="home" color={'#000000'} size={40} />
          ),}}/>
          <Tab.Screen name="Settings" options={{
            tabBarLabel: 'Settings',
            tabBarIcon: () => (
              <FontAwesome name="cog" color={'#000000'} size={40} />
            ),
          }}>
            {props => <SettingsScreen {...props} theme={theme} setTheme={setTheme} />}
          </Tab.Screen>
        </Tab.Navigator>
  )
}

function StackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
          headerShown: false,
        }} />
      <Stack.Screen name='Profile' component={ProfileScreen}/>
      <Stack.Screen name='Rental' component={RentalScreen}/>
    </Stack.Navigator>
  )
}
export default function App() {

  const [theme, setTheme] = useState({
    backgroundColor: 'lightgray',
    textColor: 'black',
    buttonColor: '#A5CAFF',
  });
  
  return (    
      <NavigationContainer>
        <TabNavigator theme={theme} setTheme={setTheme}/>
      </NavigationContainer>
  );
}

