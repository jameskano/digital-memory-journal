import { themes } from '@/styles/colors';
import variablesStyles from '@/styles/variables';
import { StyleSheet, useColorScheme } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';

export const useMoodSliderStyles = () => {
	// const {} = useResponsive();
	const colorScheme = useColorScheme();
	const theme = themes[colorScheme ?? 'dark'];

	return StyleSheet.create({
		container: {
			// rem(),
			marginBottom: variablesStyles.spacing12,
		},
		wordsContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginBottom: variablesStyles.spacing3,
		},
		words: {
			color: theme.text2,
			fontSize: variablesStyles.font4,
			// rf
		},
	});
};
