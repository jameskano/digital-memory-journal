import { useMemo, useState } from 'react';
import { AppContext } from './app-context';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<'light' | 'dark'>('dark');
	const [locale, setLocale] = useState('en');
	const [logged, setLogged] = useState(false);
	const [name, setName] = useState('');

	const value = useMemo(
		() => ({
			theme,
			locale,
			logged,
			name,
			setTheme,
			setLocale,
			setLogged,
			setName,
		}),
		[theme, locale, logged, name],
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
