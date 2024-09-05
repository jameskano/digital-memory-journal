import { useMemo, useState } from 'react';
import { AppContext } from './app-context';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<'light' | 'dark'>('dark');
	const [locale, setLocale] = useState('en');
	const [logged, setLogged] = useState(false);
	const [datesDisplayed, setDatesDisplayed] = useState<string[]>([]);

	const value = useMemo(
		() => ({
			theme,
			locale,
			logged,
			datesDisplayed,
			setTheme,
			setLocale,
			setLogged,
			setDatesDisplayed,
		}),
		[theme, locale, logged, datesDisplayed],
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
