import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RentalScreen from './screens/RentalScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function App() {
  return (    
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#c4c4c4'
            }
          }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarStyle: { backgroundColor: '#a4a4a4'},
            tabBarLabel: 'Home', 
            tabBarIcon: () => (
            <FontAwesome name="home" color={'#000000'} size={40} />
          ),}}/>
          <Tab.Screen name="Rent" component={RentalScreen} options={{
            tabBarIcon: () =>(
              <FontAwesome name="car" color={'#000000'} size={35} />
            ),
          }}/>
          <Tab.Screen name="Profile" component={ProfileScreen} options={{
                      tabBarStyle: { backgroundColor: '#a4a4a4'},
                      tabBarLabel: 'Profile',
                      tabBarIcon: () => (
                      <FontAwesome name="home" color={'#000000'} size={40} />
                    ),}}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

