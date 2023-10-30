export interface ThemeProps {
    darkMode: boolean;
    theme: {
        backgroundColor: string;
        textColor: string;
        buttonColor: string;
        iconColor: string;
    };
    setTheme: React.Dispatch<React.SetStateAction<{
        backgroundColor: string;
        textColor: string;
        buttonColor: string;
        iconColor: string;
    }>>;
}