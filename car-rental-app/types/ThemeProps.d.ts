export interface ThemeProps {
    theme: {
        backgroundColor: string;
        textColor: string;
        buttonColor: string;
    };
    setTheme: React.Dispatch<React.SetStateAction<{ backgroundColor: string; textColor: string; buttonColor: string; }>>;
}