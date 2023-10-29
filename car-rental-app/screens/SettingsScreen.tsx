import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faMoon, faSun, faBook } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemeProps } from '../types/ThemeProps';
import { LanguageProps } from '../types/LanguageProps';

function SettingsScreen({ theme, setTheme, language, toggleLanguage }: ThemeProps & LanguageProps) {
    const navigation = useNavigation();

    const handleDarkMode = () => {
        setTheme(theme.backgroundColor === 'lightgray' ? { backgroundColor: '#0D1117', textColor: 'lightgray', buttonColor: '#526580' } : { backgroundColor: 'lightgray', textColor: 'black', buttonColor: '#A5CAFF' });
    };

    // Define your settings and corresponding functions here
    const handleNotifications = () => {
        // Function for notification settings
    };

    const handleLanguages = () => {
        toggleLanguage();
    };

    // ...and so on for other settings

    return (
        <View style={[styles.container, {backgroundColor: theme.backgroundColor }]}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={[styles.backArrow]}>
                    <Icon name="arrow-long-left" size={64} color={theme.backgroundColor === 'lightgray' ? "black" : "lightgray"}/>
                </View>
            </TouchableOpacity>
            
{/**
 * NOTIFICATIONS BUTTON
 */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={[styles.iconSpace, {borderColor: theme.textColor}]}>
                    <FontAwesomeIcon icon={faBell} size={32} color={theme.backgroundColor === 'lightgray' ? "black" : "lightgray"}/>
                </View>
                <TouchableOpacity onPress={handleNotifications}>
                        <View style={[styles.button, {backgroundColor: theme.buttonColor}, {borderColor: theme.textColor}]}>
                            <Text style={[styles.buttonText, {color: theme.textColor}]}>
                                {language === 'English' ? 'Notifications' : 'Notifikationer'}
                            </Text>
                        </View>
                </TouchableOpacity>
            </View>

{/**
 * DARK/LIGHT MODE BUTTON
 */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={[styles.iconSpace, {borderColor: theme.textColor}]}>
                    <FontAwesomeIcon icon={theme.backgroundColor === 'lightgray' ? faMoon : faSun} size={32} color={theme.backgroundColor === 'lightgray' ? "black" : "lightgray"}/>
                </View>
                <TouchableOpacity onPress={handleDarkMode}>
                    <View style={[styles.button, {backgroundColor: theme.buttonColor}, {borderColor: theme.textColor}]}>
                        <Text style={[styles.buttonText, {color: theme.textColor}]}>
                            {theme.backgroundColor === 'lightgray' 
                                ? (language === 'English' ? 'Dark Mode' : 'Mørk tilstand') 
                                : (language === 'English' ? 'Light Mode' : 'Lys tilstand')}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            
{/**
 * LANGUAGES BUTTON
 */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={[styles.iconSpace, {borderColor: theme.textColor}]}>
                    <FontAwesomeIcon icon={faBook} size={32} color={theme.backgroundColor === 'lightgray' ? "black" : "lightgray"}/>
                </View>
                <TouchableOpacity onPress={handleLanguages}>
                        <View style={[styles.button, {backgroundColor: theme.buttonColor}, {borderColor: theme.textColor}]}>
                            <Text style={[styles.buttonText, {color: theme.textColor}]}>
                                {language === 'English' ? 'Languages' : 'Sprog'}
                            </Text>
                        </View>
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    backArrow: {
        justifyContent: 'center',
        height: 64,
        margin: 10,
    },
    iconSpace: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        padding: 12,
        marginLeft: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 128,
        height: 48,
        borderRadius: 10,
        margin: 10,
        borderWidth: 2,
        borderColor: 'black',
    },
    buttonText: {
        fontSize: 16,
    },
    text: {
        margin: 10,
        fontSize: 24,
    },
});

export default SettingsScreen;