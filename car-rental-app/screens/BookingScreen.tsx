import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function BookingScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text>Booking Screen Content</Text>
      {/* Add your additional content here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // You can add more styles here for your component
});

export default BookingScreen;
