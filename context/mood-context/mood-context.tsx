import { createContext, useContext } from 'react';

export const MoodContext = createContext({} as MoodContextType);

export const useMoodContext = () => {
	const context = useContext(MoodContext);
	if (context === null) {
		throw new Error('useMoodContext must be used within an MoodProvider');
	}
	return context;
};
