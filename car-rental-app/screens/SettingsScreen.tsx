import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faMoon, faSun, faBook } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemeProps } from '../types/ThemeProps';
import { LanguageProps } from '../types/LanguageProps';
import { ActiveSettingsProps } from '../types/ActiveSettingsProps';

function SettingsScreen({ activeSettings, setActiveSettings }: ActiveSettingsProps) {
    const navigation = useNavigation();

    const handleDarkMode = () => {
        const newTheme = activeSettings.themes.darkMode ? {
            backgroundColor: 'lightgray',
            textColor: 'black',
            buttonColor: '#A5CAFF',
            iconColor: 'black',
        } : {
            backgroundColor: '#0D1117',
            textColor: 'lightgray',
            buttonColor: '#526580',
            iconColor: 'lightgray',
        };
    
        setActiveSettings(prevSettings => {
            const newSettings = {
                ...prevSettings,
                themes: {
                    ...prevSettings.themes,
                    theme: newTheme,
                    darkMode: !prevSettings.themes.darkMode,
                },
            };
    
            return newSettings;
        });
    };

    // Define your settings and corresponding functions here
    const handleNotifications = () => {
        // Function for notification settings
    };

    const handleLanguages = () => {
        const newLanguage = activeSettings.languages.language === 'English' ? 'Danish' : 'English';
    
        setActiveSettings(prevSettings => ({
            ...prevSettings,
            languages: {
                ...prevSettings.languages,
                language: newLanguage,
            },
        }));
    };

    // ...and so on for other settings

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={[
                styles.container, 
                {backgroundColor: activeSettings.themes.theme.backgroundColor },
                ]}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={[styles.backArrow]}>
                        <Icon name="arrow-long-left" size={64} color={activeSettings.themes.theme.iconColor}/>
                    </View>
                </TouchableOpacity>
                
{/**
 * NOTIFICATIONS BUTTON
 */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={[styles.iconSpace, {borderColor: activeSettings.themes.theme.textColor}]}>
                        <FontAwesomeIcon icon={faBell} size={32} color={activeSettings.themes.theme.iconColor}/>
                    </View>
                    <TouchableOpacity onPress={handleNotifications}>
                            <View style={[
                                styles.button, 
                                {backgroundColor: activeSettings.themes.theme.buttonColor}, 
                                {borderColor: activeSettings.themes.theme.textColor},
                                ]}>
                                <Text style={[
                                    styles.buttonText, 
                                    {color: activeSettings.themes.theme.textColor},
                                    ]}>
                                    {activeSettings.languages.language === 'English' ? 'Notifications' : 'Notifikationer'}
                                </Text>
                            </View>
                    </TouchableOpacity>
                </View>

{/**
 * DARK/LIGHT MODE BUTTON
 */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View id='dark-light-mode-icon' style={[
                        styles.iconSpace, 
                        {borderColor: activeSettings.themes.theme.textColor},
                        ]}>
                        <FontAwesomeIcon 
                            icon={activeSettings.themes.darkMode ? faSun : faMoon} 
                            size={32} 
                            color={activeSettings.themes.theme.iconColor}
                        />
                    </View>
                    <TouchableOpacity onPress={handleDarkMode}>
                        <View style={[
                            styles.button, 
                            {backgroundColor: activeSettings.themes.theme.buttonColor}, 
                            {borderColor: activeSettings.themes.theme.textColor},
                            ]}>
                            <Text style={[
                                styles.buttonText, 
                                {color: activeSettings.themes.theme.textColor},
                                ]}>
                                {activeSettings.themes.darkMode 
                                    ? (activeSettings.languages.language === 'English' ? 'Light Mode' : 'Lys tilstand') 
                                    : (activeSettings.languages.language === 'English' ? 'Dark Mode' : 'Mørk tilstand')}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
{/**
 * LANGUAGES BUTTON
 */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={[
                        styles.iconSpace, 
                        {borderColor: activeSettings.themes.theme.textColor},
                        ]}>
                        <FontAwesomeIcon 
                        icon={faBook} 
                        size={32} 
                        color={activeSettings.themes.theme.iconColor}/>
                    </View>
                    <TouchableOpacity onPress={handleLanguages}>
                            <View style={[
                                styles.button, 
                                {backgroundColor: activeSettings.themes.theme.buttonColor}, 
                                {borderColor: activeSettings.themes.theme.textColor},
                                ]}>
                                <Text style={[
                                    styles.buttonText, 
                                    {color: activeSettings.themes.theme.textColor},
                                    ]}>
                                    {activeSettings.languages.language === 'English' ? 'Languages' : 'Sprog'}
                                </Text>
                            </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
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