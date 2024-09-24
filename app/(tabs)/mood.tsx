import { View, Text } from 'react-native';
import React from 'react';
import MoodSlider from '@/components/mood-slider/MoodSlider';
import { useMood } from '@/styles/mood.styles';
import { ScrollView } from 'native-base';
import { spheresColors } from '@/helpers/constants/spheres-colors';
import MoodSphere from '@/components/mood-sphere/MoodSphere';
import { defaultEmotions } from '@/helpers/constants/default-emotions';
import { useMoodContext } from '@/context/mood-context/mood-context';

const Mood = () => {
	const styles = useMood();
	const { setMoodData } = useMoodContext();

	const changeDefaultEmotionHandler = (value: number, id: string) => {};

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.moodText}>How are you feeling now?</Text>
				<View style={styles.spheresContainer}>
					{spheresColors.map((sphere) => (
						<MoodSphere colors={sphere.colors} shadowColor={sphere.shadowColor} key={sphere.name} />
					))}
				</View>
				<View>
					{defaultEmotions.map(({ id, words }) => (
						<MoodSlider key={id} words={words} id={id} onChange={changeDefaultEmotionHandler} />
					))}
				</View>
			</View>
		</ScrollView>
	);
};

export default Mood;
