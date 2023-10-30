import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';




const ProfileScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [Description, setDescription] = useState('');

  const [secureTextEntry, setSecureTextEntry] = useState(true);




  const textInputChange = (val:string) => {
    setEmail(val);
  };

  const handlePasswordChange = (val:string) => {
    setPassword(val);
  };
  const handleNameChange = (val:string) => {
    setName(val);
  };
  const handleAddressChange = (val:string) => {
    setAddress(val);
  };
  const handleDescriptionChange = (val:string) => {
    setDescription(val);
  };



  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleNext = () => {
    if (name && address && email && Description && password) {
      navigation.navigate('Home');
    } else {
      alert('Please fill in all the required fields before proceeding.');
    }
  };




  //Profile
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>User Profile</Text>
        </View>
      
        <View style={styles.footer}>
          <Text style={styles.footerText}>Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user" color="pink" size={20} />
            <TextInput placeholder="Your name" style={styles.textInput} value={name} onChangeText={(val) => handleNameChange(val)} />
            {name ? (
              <Animatable.View animation="bounceIn" duration={500}>
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
        

          <Text style={[styles.footerText, { marginTop: 30 }]}>Address</Text>
          <View style={styles.action}>
            <FontAwesome name="user" color="pink" size={20} />
            <TextInput
              placeholder="Your address"
              style={styles.textInput}
              value={address}
              onChangeText={(val) => handleAddressChange(val)}
            />
            {address ? (
              <Animatable.View animation="bounceIn" duration={500}>
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>


          <Text style={[styles.footerText, { marginTop: 30 }]}>History</Text>
          <View style={styles.action}>
            <FontAwesome name="user" color="pink" size={20} />
            <TextInput
              placeholder="Some description"
              style={styles.textInput}
              value={Description}
              onChangeText={(val) => handleDescriptionChange(val)}
              multiline={true}
              numberOfLines={4}
            />
            {Description ? (
              <Animatable.View animation="bounceIn" duration={500}>
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.footerText, { marginTop: 30 }]}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="user" color="pink" size={20} />
            <TextInput
              placeholder="Your email"
              style={styles.textInput}
              value={email}
              onChangeText={(val) => textInputChange(val)}
            />
            {email ? (
              <Animatable.View animation="bounceIn" duration={500}>
                <Feather name="check-circle" color="green" size={30} />
              </Animatable.View>
            ) : null}
          </View>




          <Text style={[styles.footerText, { marginTop: 30 }]}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="green" size={20} />
            <TextInput
              placeholder="Your password"
              secureTextEntry={secureTextEntry}
              style={styles.textInput}
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              <Feather
                name={secureTextEntry ? 'eye-off' : 'eye'}
                color="green"
                size={20}
              />
            </TouchableOpacity>
          </View>

          {/* New input field for the user's name */}


          <View style={styles.buttonContainer}>
            <View style={styles.signInBox}>
              <Button title="Next" color="purple" onPress={handleNext} />
            </View>

          </View>
        </View>
      </View>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 25,
    color: 'blue',
    paddingTop: 20,
  },
  footer: {},
  footerText: {
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'pink',
    paddingHorizontal: 10,
    width: '100%',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: 'black',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signInBox: {
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 10,
    padding: 10,
  },
  signIn: {
    borderWidth: 1,
    borderColor: 'blue',
    marginTop: 15,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },

});

export default ProfileScreen;
