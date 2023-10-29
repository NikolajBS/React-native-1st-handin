import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RentalScreen from './screens/RentalScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

function TabNavigator(){
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
  return (    
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
  );
}

