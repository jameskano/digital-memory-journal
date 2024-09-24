import { useMemo, useState } from 'react';
import { MoodContextType } from './mood-context.types';
import { MoodContext } from './mood-context';

export const MoodProvider = ({ children }: { children: React.ReactNode }) => {
	const [moodData, setMoodData] = useState<MoodContextType>();

	const value = useMemo(
		() => ({
			moodData,
			setMoodData,
		}),
		[moodData],
	);

	return <MoodContext.Provider value={value}>{children}</MoodContext.Provider>;
};
