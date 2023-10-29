import { StyleSheet, Text, View,TouchableOpacity,Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import React, { useState } from 'react';

import {images} from '../images';

const  RentalScreen = ({ route }) => {
 const [amount, setAmount] = useState(0);
 const [isRenting, setIsRenting] = useState(true);

  const alertUser = () => {
    setIsRenting(!isRenting);
    if(isRenting){
    Alert.alert('Added to Cart');
    } else{
    Alert.alert('Renting canceled');
    }

  };

const { NameOfCar, Model, Num, price_per_day, location } = route.params;


  return (
    <View style={styles.container}>
     <View style={styles.menuWrapper}>

      <Text style={styles.Header} > Rent your car now</Text>
      <Icon name="user" size={30} color="black" style={styles.profile}/>
     </View>

    <View style={styles.carContainer}>
    <Text  style={styles.nameText}>{NameOfCar}</Text>
      <Text  style={styles.nameText}>{Model}</Text>
    <Image source={images[Num]} style={styles.images} />

    </View>

    <View style={styles.descriptionWrapper}>

    <View style={styles.priceIcon}>
    <Icon name="price-tag" size={40} color="black" />
    <Text>{price_per_day}/DDK Per Day</Text>
    </View>
    <View>
     <Icon name="location-pin" size={40} color="black" />
     <Text>{location}</Text>
    </View>


    <TouchableOpacity onPress={alertUser}>
      <Icon name={isRenting ? 'shopping-cart' : 'check'} size={40} color="black" />
      <Text>{isRenting ? 'Not Booked' : 'You have booked this car'} </Text>
    </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f0ae5d'

  },
  menuWrapper: {
  marginTop: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems:'center',
  },
  profile: {

  },

  carContainer: {
  flex:1,
  backgroundColor:'#f0ae5d',
  justifyContent:'center',
  alignItems: 'center',
  margin:90,
  },

  descriptionWrapper:{
  flex:1,
  backgroundColor:'#ebfaf9',
  borderTopRightRadius:30,
  borderTopLeftRadius:30,
  flexDirection:'row',
  paddingLeft:20,
  paddingRight:20,
  justifyContent:'space-between',
  borderWidth:1,
  },
  priceIcon: {
  flexDirection:'column',

  },
  Header: {
  paddingTop:40,
  fontSize:30,
  },
  images: {
    width: 390,
    height: 200
  },
  nameText: {
  fontSize:20,
  fontWeight: 'bold',
  color:'red',
  }
});

export default RentalScreen;
