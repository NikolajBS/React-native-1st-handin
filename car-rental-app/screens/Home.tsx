import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActiveSettingsProps } from '../types/ActiveSettingsProps';
import { ActiveSettingsContext } from '../contexts/ActiveSettingsContext';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import { useEffect } from 'react';


const HomeScreen = ({ navigation }) => {
  const { activeSettings }: ActiveSettingsProps = React.useContext(ActiveSettingsContext);

  const storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // handle error
    }
  };

  storeData("car1", "Nissan Skyline");
  storeData("car2", "Ford GT");


  const retrieveData = async (key: string) => {
    try {
      const storedValue = await AsyncStorage.getItem(key);
      if (storedValue) {
        const parsedValue = JSON.stringify(storedValue);
        console.log(parsedValue); // This will print the actual data
        return parsedValue;
      } else {
        console.log('No data found in AsyncStorage');
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View style={[styles.container, { backgroundColor: activeSettings.themes.theme.backgroundColor }]}>
      <View style={styles.topArea}>
        <FontAwesome name="align-justify" color={activeSettings.themes.theme.iconColor} size={40} />
        <View style={styles.smallSpace}></View>
        <FontAwesome name="search" color={activeSettings.themes.theme.iconColor} size={40} />
        <View style={styles.space}></View>
        <TouchableOpacity onPress={() => { navigation.navigate('SettingsScreen') }}>
          <FontAwesome name="cog" color={activeSettings.themes.theme.iconColor} size={40} style={styles.userIcon} />
        </TouchableOpacity>
        <View style={styles.smallSpace}></View>
        <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
          <FontAwesome name="user" color={activeSettings.themes.theme.iconColor} size={40} style={styles.userIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.flexbox}>
        <TouchableOpacity onPress={() => { navigation.navigate('Rental', { NameOfCar: 'Nissan Skyline', Num: 0 }) }}>
          <View style={[styles.box, { backgroundColor: activeSettings.themes.theme.containerColor }]}>
            <Image source={require('../imgs/car1.jpg')} style={styles.images} />
            <Text style={[styles.txtcolor, { color: activeSettings.themes.theme.textColor }]}>Nissan Skyline</Text>
            <Text style={{ color: activeSettings.themes.theme.textColor }}>This car is very cool, now please rent it.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Rental', { NameOfCar: 'Ford GT', Num: 1 }) }}>
          <View style={[styles.box, { backgroundColor: activeSettings.themes.theme.containerColor }]}>
            <Image source={require('../imgs/car2.jpg')} style={styles.images} />
            <Text style={[styles.txtcolor, { color: activeSettings.themes.theme.textColor }]}>Ford GT</Text>
            <Text style={{ color: activeSettings.themes.theme.textColor }}>This car is very cool, now please rent it.</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e09f3e',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  topArea: {
    flexDirection: 'row',
    margin: 1
  },
  flexbox: {
    flex: 1,
    flexDirection: 'column',
    margin: 5
  },
  box: {
    backgroundColor: '#F0AA42',
    alignItems: 'center',
    margin: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10

  },
  images: {
    width: 390,
    height: 200
  },
  txtcolor: {
    color: 'red',
    fontSize: 30
  },
  userIcon: {
    alignSelf: 'flex-end'
  },
  space: {
    width: 205
  },
  smallSpace: {
    width: 15
  }
});

export default HomeScreen;