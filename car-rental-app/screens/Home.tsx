import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import { useEffect } from 'react';


const HomeScreen = ({ navigation }) =>{

  
  const storeData = async(key:string, value:string) =>{
    try{
      await AsyncStorage.setItem(key, value);
    } catch(e) {
      // handle error
    }};
    
    storeData("car1","Nissan Skyline");
    storeData("car2","Ford GT");
    

    const retrieveData = async (key:string) => {
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
    
    
    return(
    <View style={styles.container}>
      <View style={styles.topArea}>
        <FontAwesome name="align-justify" color={'#000000'} size={40} />
        <View style={styles.smallSpace}></View>
        <FontAwesome name="search" color={'#000000'} size={40} />
        <View style={styles.space}></View>  
        <TouchableOpacity onPress={() =>{navigation.navigate('Profile')}}>
        <FontAwesome name="user" color={'#000000'} size={40} style={styles.userIcon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.flexbox}>
        <TouchableOpacity onPress={() =>{navigation.navigate('Rental', {NameOfCar: 'Nissan Skyline', Num: 0})}}>
        <View style={styles.box}>
          <Image source={require('../imgs/car1.jpg')} style={styles.images} />
          <Text style={styles.txtcolor}>Nissan Skyline</Text>
          <Text>This car is very cool, now please rent it.</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>{navigation.navigate('Rental', {NameOfCar: 'Ford GT', Num: 1})}}>
        <View style={styles.box}>
          <Image source={require('../imgs/car2.jpg')} style={styles.images} />
          <Text style={styles.txtcolor}>Ford GT</Text>
          <Text>This car is very cool, now please rent it.</Text>
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
  userIcon:{
    alignSelf: 'flex-end'
  },
  space: {
    width: 260
  },
  smallSpace: {
    width: 15
  }
});

export default HomeScreen