export interface ThemeProps {
    darkMode: boolean;
    theme: {
        backgroundColor: string;
        containerColor: string;
        textColor: string;
        buttonColor: string;
        iconColor: string;
    };
    setTheme: React.Dispatch<React.SetStateAction<{
        backgroundColor: string;
        containerColor: string;
        textColor: string;
        buttonColor: string;
        iconColor: string;
    }>>;
}