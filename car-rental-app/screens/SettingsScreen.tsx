import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faBook, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

function SettingsScreen() {
    const navigation = useNavigation();
    const [language, setLanguage] = useState('English');
    const [isDarkMode, setDarkMode] = useState(false);

    const handleNotifications = () => {
        const notificationText = language === 'English' ? 'You have 0 Notifications' : 'Du har 0 Notifikationer';
        Alert.alert(notificationText);
    };

    const handleLanguages = () => {
        if (language === 'English') {
            setLanguage('Danish');
        } else {
            setLanguage('English');
        }
    };

    const handleDarkMode = () => {
        setDarkMode(!isDarkMode);
    };

    const buttonText = isDarkMode
        ? language === 'English'
            ? 'Dark Mode'
            : 'Mørk tilstand'
        : language === 'English'
            ? 'Light Mode'
            : 'Lystilstand';

    const buttonBackgroundColor = isDarkMode ? '#1E90FF' : '#A5CAFF';
    const buttonTextColor = isDarkMode ? 'white' : 'black';

    const containerStyle = {
        flex: 1,
        backgroundColor: isDarkMode ? '#121212' : 'lightgray',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    };

    const buttonTextStyle = {
        color: buttonTextColor,
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={[styles.backArrow]}>
                    <Icon name="arrow-long-left" size={64} color={isDarkMode ? 'white' : 'black'} />
                </View>
            </TouchableOpacity>

            {/**
             * NOTIFICATIONS BUTTON
             */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.iconSpace]}>
                    <FontAwesomeIcon icon={faBell} size={32} color={isDarkMode ? 'white' : 'black'} />
                </View>
                <TouchableOpacity onPress={handleNotifications}>
                    <View style={[styles.button, { backgroundColor: buttonBackgroundColor }]}>
                        <Text style={[styles.buttonText, buttonTextStyle]}>
                            {language === 'English' ? 'Notifications' : 'Notifikationer'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/**
             * LANGUAGES BUTTON
             */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.iconSpace]}>
                    <FontAwesomeIcon icon={faBook} size={32} color={isDarkMode ? 'white' : 'black'} />
                </View>
                <TouchableOpacity onPress={handleLanguages}>
                    <View style={[styles.button, { backgroundColor: buttonBackgroundColor }]}>
                        <Text style={[styles.buttonText, buttonTextStyle]}>
                            {language === 'English' ? 'Languages' : 'Sprog'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/**
             * DARK MODE BUTTON
             */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.iconSpace]}>
                    <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} size={32} color={isDarkMode ? 'white' : 'black'} />
                </View>
                <TouchableOpacity onPress={handleDarkMode}>
                    <View style={[styles.button, { backgroundColor: buttonBackgroundColor }]}>
                        <Text style={[styles.buttonText, buttonTextStyle]}>
                            {buttonText}
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
        backgroundColor: 'lightgray',
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
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A5CAFF',
        padding: 10,
        width: 128,
        height: 48,
        borderRadius: 10,
        margin: 10,
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
