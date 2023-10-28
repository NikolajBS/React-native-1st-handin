import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RentalScreen from './components/RentalScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
     
    <View style={styles.container}>
      <RentalScreen/>
      <StatusBar style="auto" />
    </View>
    
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

