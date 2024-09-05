import { createContext, useContext } from 'react';

type AppContextType = {
	theme: 'light' | 'dark';
	locale: string;
	logged: boolean;
	datesDisplayed: string[];
	setTheme: (value: 'light' | 'dark') => void;
	setLocale: (value: string) => void;
	setLogged: (value: boolean) => void;
	setDatesDisplayed: (value: string[]) => void;
};

export const AppContext = createContext({} as AppContextType);

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (context === null) {
		throw new Error('useAppContext must be used within an AppProvider');
	}
	return context;
};
