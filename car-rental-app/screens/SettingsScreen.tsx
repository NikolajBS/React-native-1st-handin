import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeProps } from '../types/ThemeProps';

function SettingsScreen({ theme, setTheme }: ThemeProps) {
    const navigation = useNavigation();

    const handleDarkMode = () => {
        setTheme(theme.backgroundColor === 'lightgray' ? { backgroundColor: '#0D1117', textColor: 'lightgray', buttonColor: '#526580' } : { backgroundColor: 'lightgray', textColor: 'black', buttonColor: '#A5CAFF' });
    };

    // Define your settings and corresponding functions here
    const handleSetting1 = () => {
        // Function for setting 1
    };

    const handleSetting2 = () => {
        // Function for setting 2
    };

    // ...and so on for other settings

    return (
        <View style={[styles.container, {backgroundColor: theme.backgroundColor }]}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={[styles.button, {backgroundColor: theme.buttonColor}, {borderColor: theme.textColor}]}>
                    <Text style={[styles.buttonText, {color: theme.textColor}]}>
                        Go to Home
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSetting1}>
                <View style={[styles.button, {backgroundColor: theme.buttonColor}, {borderColor: theme.textColor}]}>
                    <Text style={[styles.buttonText, {color: theme.textColor}]}>
                        Notifications
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleDarkMode}>
                <View style={[styles.button, {backgroundColor: theme.buttonColor}, {borderColor: theme.textColor}]}>
                    <Text style={[styles.buttonText, {color: theme.textColor}]}>
                        {theme.backgroundColor === 'lightgray' ? "Dark Mode" : "Light Mode"}
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSetting2}>
                <View style={[styles.button, {backgroundColor: theme.buttonColor}, {borderColor: theme.textColor}]}>
                    <Text style={[styles.buttonText, {color: theme.textColor}]}>
                        Language
                    </Text>
                </View>
            </TouchableOpacity>
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 128,
        height: 48,
        borderRadius: 10,
        margin: 10,
        borderWidth: 1,
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