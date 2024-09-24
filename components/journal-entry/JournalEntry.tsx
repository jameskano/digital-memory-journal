import { View, Text } from 'react-native';
import { JournalEntryType } from './JournalEntry.types';
import moment from 'moment';
import useJournalEntryStyles from './JournalEntry.styles';

const JournalEntry = ({ id, text, title, date, firstOfGroup = false }: JournalEntryType) => {
	const styles = useJournalEntryStyles();

	const time = moment(date).format('HH:mm');

	return (
		<View style={firstOfGroup ? styles.firstContainer : styles.container}>
			<Text style={styles.hour}>{time}</Text>
			{title && <Text style={styles.title}>{title}</Text>}
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};

export default JournalEntry;
