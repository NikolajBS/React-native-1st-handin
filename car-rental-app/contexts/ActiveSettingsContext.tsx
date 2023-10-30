import React from 'react';
import { ActiveSettingsProps } from '../types/ActiveSettingsProps';

export const ActiveSettingsContext = React.createContext<ActiveSettingsProps>({
  activeSettings: {
    themes: {
      darkMode: false,
      theme: {
        backgroundColor: '#B28440',
        containerColor: '#F0AA42', //orange
        textColor: 'black',
        buttonColor: '#E0A450',
        iconColor: 'black',
      },
      setTheme: () => {},
    },
    languages: {
      language: 'English',
      setLanguage: () => {},
    },
  },
  setActiveSettings: () => {},
});
