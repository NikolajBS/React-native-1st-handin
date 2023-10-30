import { ThemeProps } from './types/ThemeProps';
import { LanguageProps } from './types/LanguageProps';

export interface ActiveSettingsProps {
    activeSettings: {
        themes: ThemeProps;
        languages: LanguageProps;
    };
    setActiveSettings: React.Dispatch<React.SetStateAction<{
        themes: ThemeProps;
        languages: LanguageProps;
    }>>;
}