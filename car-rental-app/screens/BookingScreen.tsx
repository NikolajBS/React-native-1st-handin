import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { images } from '../images';

function CarBox({ name, price, duration, date, imageIndex }) {
  const carImage = images[imageIndex];

  return (
    <View style={styles.carComponent}>
      <Image source={carImage} style={styles.carImage} />
      <Text>Name: {name}</Text>
      <Text>Price: {price}</Text>
      <Text>Duration: {duration}</Text>
      <Text>Date: {date}</Text>
    </View>
  );
}

function BookingScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Your Bookings</Text>
      <CarBox name="Toyota" price="$50" duration="2 days" date="Nov 10, 2023" imageIndex={0} />
      <CarBox name="Mercedes" price="$60" duration="3 days" date="Nov 15, 2023" imageIndex={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carComponent: {
    flex: 1,
    backgroundColor: '#f0ae5d',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  carImage: {
    width: 100,
    height: 100,
  },
  txt: {
    fontSize: 40,
  },
});

export default BookingScreen;
