import { StyleSheet, useColorScheme } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import variablesStyles from './variables';
import { themes } from './colors';

export const useMood = () => {
	// const {} = useResponsive();
	const colorScheme = useColorScheme();
	const theme = themes[colorScheme ?? 'dark'];

	return StyleSheet.create({
		container: {
			// padding: rem(),
			paddingHorizontal: variablesStyles.spacing8,
			paddingVertical: variablesStyles.spacing4,
			marginTop: variablesStyles.spacing8,
			// rem
		},
		spheresContainer: {
			flexDirection: 'row',
			marginBottom: variablesStyles.spacing13,
			marginTop: variablesStyles.spacing10,
			// rem
		},
		moodText: {
			color: theme.text2,
			alignSelf: 'center',
			fontSize: variablesStyles.font8,
		},
	});
};
