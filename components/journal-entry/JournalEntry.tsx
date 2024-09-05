import { View, Text } from 'react-native';
import { JournalEntryType } from './JournalEntry.types';

const JournalEntry = ({ id, text, title, date }: JournalEntryType) => {
	return (
		<View onTouchEnd={() => 0}>
			<View>
				{title && <Text>{title}</Text>}
				<Text>{date.toString()}</Text>
			</View>
			<Text>{text}</Text>
		</View>
	);
};

export default JournalEntry;
