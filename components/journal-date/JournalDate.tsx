import moment from 'moment';
import { View, Text } from 'react-native';
import useJournalDateStyles from './JornalDate.styles';
import { JournalDateType } from './JournalDate.types';

const JournalDate = ({ date, index }: JournalDateType) => {
	const styles = useJournalDateStyles();

	const dayNum = moment(date).format('D');
	const dayText = moment(date).format('dddd');
	const month = moment(date).format('MMM').toUpperCase();
	const year = moment(date).format('YYYY');

	return (
		<View style={index === 0 ? styles.firstContainer : styles.container}>
			<Text style={styles.dayNum}>{dayNum}</Text>
			<Text style={styles.month}>{month}</Text>
			<View>
				<Text style={styles.dayText}>{dayText}</Text>
			</View>
		</View>
	);
};

export default JournalDate;
