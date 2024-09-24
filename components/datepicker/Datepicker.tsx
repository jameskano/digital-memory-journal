import moment from 'moment';
import { View } from 'native-base';
import { useState } from 'react';
import DateTimePicker from 'react-native-ui-datepicker';
import { useDatepicker } from './Datepicker.styles';
import { useColorScheme } from 'react-native';
import { themes } from '@/styles/colors';
import { Ionicons } from '@expo/vector-icons';

const Datepicker = () => {
	const styles = useDatepicker();
	const colorScheme = useColorScheme();
	const theme = themes[colorScheme ?? 'dark'];

	const [date, setDate] = useState(new Date());

	return (
		<View style={styles.datepickerContainer}>
			<DateTimePicker
				date={date}
				mode='multiple'
				firstDayOfWeek={1}
				onChange={(params) => setDate(params.date)}
				calendarTextStyle={styles.calendarText}
				weekDaysTextStyle={styles.weekDays}
				headerTextStyle={styles.headerText}
				buttonPrevIcon={<Ionicons name='chevron-back' size={24} style={styles.arrows} />}
				buttonNextIcon={<Ionicons name='chevron-forward' size={24} style={styles.arrows} />}
			/>
		</View>
	);
};

export default Datepicker;
