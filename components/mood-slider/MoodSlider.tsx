import { Slider } from 'native-base';
import { MoodSliderType } from './MoodSlider.types';
import { View, Text } from 'react-native';
import variablesStyles from '@/styles/variables';
import { useMoodSliderStyles } from './MoodSlider.styles';
import { firstToUppercase } from '@/helpers/functions/utils';

const MoodSlider = ({ words, maxPoints = 40, onChange, id }: MoodSliderType) => {
	const styles = useMoodSliderStyles();

	return (
		<View style={styles.container}>
			<View style={styles.wordsContainer}>
				<Text style={styles.words}>{firstToUppercase(words[0])}</Text>
				{words.length > 1 && <Text style={styles.words}>{firstToUppercase(words[1])}</Text>}
			</View>
			<Slider
				defaultValue={words.length > 1 ? maxPoints / 2 : 0}
				maxValue={maxPoints}
				step={10}
				size='md'
				onChange={(value) => onChange(value, id)}>
				<Slider.Track>
					<Slider.FilledTrack />
				</Slider.Track>
				<Slider.Thumb />
			</Slider>
		</View>
	);
};

export default MoodSlider;
