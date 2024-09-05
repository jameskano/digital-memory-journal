import { View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { entries } from '@/constants/mocked-entries';
import JournalEntry from '@/components/journal-entry/JournalEntry';
import { useAppContext } from '@/context/app-context/app-context';
import JournalDate from '@/components/journal-date/JournalDate';

const Today = () => {
	const { datesDisplayed, setDatesDisplayed } = useAppContext();

	const checkTime = (date: string) => {
		console.log(datesDisplayed);
		if (datesDisplayed.includes(date)) return;
		setDatesDisplayed([...datesDisplayed, date]);
		console.log('a');
		return <JournalDate date={date} />;
	};

	return (
		<SafeAreaView>
			<View>
				{entries.map((entry) => {
					checkTime(entry.date);
					return <JournalEntry {...entry} key={entry.id} />;
				})}
			</View>
		</SafeAreaView>
	);
};

export default Today;
