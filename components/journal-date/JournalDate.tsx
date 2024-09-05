import moment from 'moment';
import { View, Text } from 'react-native';

const JournalDate = ({ date }: { date: string }) => {
	console.log(moment().format('MM'));

	return (
		<View>
			<Text>1</Text>
			<Text>1</Text>
			<Text>1</Text>
		</View>
	);
};

export default JournalDate;
