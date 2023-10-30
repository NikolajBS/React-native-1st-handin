import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'; // Import your Home screen component
import RentalScreen from './screens/RentalScreen';
import Profile from './screens/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import SettingScreen from './screens/SettingScreen';

const Stack= createStackNavigator();
const Tab=createBottomTabNavigator();

const TabNavigator=({ theme, setTheme, language, toggleLanguage }: ThemeProps & LanguageProps) => {
return(
<Tab.Navigator
screenOptions={{
            tabBarStyle: {
              backgroundColor: '#335c67'
            }
          }}

>
<Tab.Screen name='Home' component={Home}
 options={{
            tabBarStyle: { backgroundColor: '#335c67'},
            tabBarLabel: 'Home',
            tabBarIcon: () => (
            <FontAwesome name="home" color={'#FFFFFF'} size={40} />
          ),}}
/>
<Tab.Screen name="Settings" options={{
            tabBarLabel: 'Settings',
            tabBarIcon: () => (
              <FontAwesome name="cog" color={'#FFFFFF'} size={40} />
            ),
          }}>
            {props => <SettingScreen {...props}
            theme={theme} setTheme={setTheme}
            language={language} toggleLanguage={toggleLanguage}
/>}
</Tab.Screen>
<Tab.Screen name='Profile' component={Profile}/>
</Tab.Navigator>
)
}


export default function App() {
  const [theme, setTheme] = useState({
    backgroundColor: 'lightgray',
    textColor: 'black',
    buttonColor: '#A5CAFF',
  });

const [language, setLanguage] = useState<string>('English');

const toggleLanguage = () => {
  setLanguage(prevLanguage => prevLanguage === 'English' ? 'Danish' : 'English');
};


  return (


    <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen name='TabNavigator' component={TabNavigator} options={{headerShown: false}}
         />
         <Stack.Screen name='Rental' component={RentalScreen}/>
         <Stack.Screen name='Profile' component={Profile}/>
         </Stack.Navigator>
       </NavigationContainer>
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

export default App;
