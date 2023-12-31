import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ActiveSettingsProps } from '../types/ActiveSettingsProps';
import { ActiveSettingsContext } from '../contexts/ActiveSettingsContext';
import { useNavigation } from '@react-navigation/native';
import RentalScreen from './screens/RentalScreen';
import {images} from '../images';


const HomeScreen = ({ navigation }) => {
  const { activeSettings }: ActiveSettingsProps = React.useContext(ActiveSettingsContext);
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetchCarData();
  }, []);

  const fetchCarData = async () => {
    try {
      const response = await fetch('https://car-rentals.ladegaardmoeller.dk/cars');
      if (response.ok) {
        const data = await response.json();
        setCarData(data);
      } else {
        console.error('Failed to fetch car data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderCarItems = () => {
    return carData.map((car, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate('Rental', { NameOfCar: car.make, Model: car.model, Num: index, price_per_day: car.price_per_day, location: car.location })}
      >
        <View style={[styles.carContainer, { backgroundColor: activeSettings.themes.theme.containerColor }]}>
          <View style={styles.carBox}>
            <Image source={images[index]} style={styles.carImage} />
            <View style={styles.carInfo}>
              <Text style={[styles.carName, { color: activeSettings.themes.theme.textColor }]}>{car.make}</Text>
              <Text style={[styles.carModel, { color: activeSettings.themes.theme.textColor }]}>{car.model}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ));
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

      <ScrollView style={styles.scrollView}>{renderCarItems()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e09f3e',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  topArea: {
    flexDirection: 'row',
    margin: 1,
  },
  carContainer: {
    backgroundColor: '#F0AA42',
    margin: 10,
    borderRadius: 10,
  },
  carBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  carImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  carInfo: {
    marginLeft: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carModel: {
    fontSize: 14,
  },
  userIcon: {
    alignSelf: 'flex-end',
  },
  space: {
    width: 205,
  },
  smallSpace: {
    width: 15,
  },
  scrollView: {
    width: '100%',
  },
});

export default HomeScreen;
