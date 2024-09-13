import { ImageBackground, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { entries } from '@/constants/mocked-entries';
import JournalEntry from '@/components/journal-entry/JournalEntry';
import JournalDate from '@/components/journal-date/JournalDate';
import useTodayStyles from '@/styles/today.styles';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useGreetings } from '@/hooks/useGreetings';

const Today = () => {
	const styles = useTodayStyles();
	const { greetingTitle, greetingQuestion } = useGreetings();
	const today = '';

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>{greetingTitle}</Text>
				{/* <Ionicons name='ellipsis-horizontal' size={24} /> */}
			</View>

			<View style={styles.todayScreen}>
				{today ? (
					<>
						<Text style={styles.todayTitle}>You feel</Text>
					</>
				) : (
					<>
						<ImageBackground source='../../assets/images/magic1.png' style={styles.imageBackground}>
							<Text style={styles.todayTitle}>{greetingQuestion}</Text>
						</ImageBackground>
					</>
				)}
			</View>
		</SafeAreaView>
	);
};

export default Today;
