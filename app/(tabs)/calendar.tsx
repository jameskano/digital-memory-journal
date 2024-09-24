import { View, Text } from 'react-native';
import React from 'react';
import Datepicker from '@/components/datepicker/Datepicker';
import { useCalendarStyles } from '@/styles/calendar.styles';

const Calendar = () => {
	const styles = useCalendarStyles();
	return (
		<View style={styles.calendarContainer}>
			<Datepicker />
		</View>
	);
};

export default Calendar;
