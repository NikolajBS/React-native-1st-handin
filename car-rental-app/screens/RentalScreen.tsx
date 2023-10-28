import { StyleSheet, Text, View,TouchableOpacity,Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import React, { useState } from 'react';

import {images} from '../images';

const  RentalScreen = ({ route }) => {
 const [amount, setAmount] = useState(0);
 const [isRenting, setIsRenting] = useState(true);

  const incrementAmount = () => {
    setIsRenting(!isRenting);
    if(isRenting){
    Alert.alert('Added to Cart');
    } else{
    Alert.alert('Renting canceled');
    }
    // You can add more logic to actually add items to the cart here.
  };

  const {NameOfCar, Num} = route.params;
  
  return (
    <View style={styles.container}>
     <View style={styles.menuWrapper}>
     <Icon name="arrow-long-left" size={30} color="black"/>
      <Text style={styles.Header} > Rent your car now</Text>
      <Icon name="user" size={30} color="black" style={styles.profile}/>
     </View>

    <View style={styles.carContainer}>
    <Text>car {NameOfCar}</Text>
    
    <Image source={images[Num]} style={styles.images} />
  
    </View>

    <View style={styles.descriptionWrapper}>

    <View style={styles.priceIcon}>
    <Icon name="price-tag" size={40} color="black" />
    <Text>price</Text>
    </View>


    <TouchableOpacity onPress={incrementAmount}>
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
  backgroundColor:'#f7f1e1',
  borderWidth:1,
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
  }
});

export default RentalScreen;
