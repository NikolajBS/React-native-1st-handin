import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native';
import Feather from 'react-native-feather';
import Icon from 'react-native-vector-icons/Entypo';
import React, { useState } from 'react';

export default function RentalScreen() {
 const [amount, setAmount] = useState(0);
 const [isRenting, setIsRenting] = useState(false);
 const [isBooked, setIsBooked] = useState(false);

  const incrementAmount = () => {
    setIsRenting(!isRenting);
    if(isRenting){
    Alert.alert('Renting canceled');
    } else{
    Alert.alert('Added to Cart');
    }
    setIsBooked(!isBooked);
    Alert.alert('Added to Cart');
    // You can add more logic to actually add items to the cart here.
  };

  return (
    <View style={styles.container}>
     <View style={styles.menuWrapper}>
     <Icon name="arrow-long-left" size={30} color="black"/>
      <Text> Rent your car now</Text>
      <Icon name="user" size={30} color="black" style={styles.profile}/>
     </View>

    <View style={styles.carContainer}>
    <Text>car</Text>
    </View>

    <View style={styles.descriptionWrapper}>
    <Icon name="price-tag" size={40} color="black" />

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
  margin:50,
  },

  descriptionWrapper:{
  flex:1,
  backgroundColor:'#ebfaf9',
  borderRadius:30,
  flexDirection:'row',
  paddingLeft:20,
  paddingRight:20,
  justifyContent:'space-between',
  borderWidth:1,
  }
});

export default RentalScreen;
