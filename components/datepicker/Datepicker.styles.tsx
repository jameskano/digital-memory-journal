import { themes } from '@/styles/colors';
import variablesStyles from '@/styles/variables';
import { StyleSheet, TextStyle, useColorScheme, ViewStyle } from 'react-native';

export const useDatepicker = () => {
	// const { rem } = useResponsive();
	const colorScheme = useColorScheme();
	const theme = themes[colorScheme ?? 'dark'];

	const weekAndHeaderText = {
		color: theme.text2,
		fontWeight: '600' as TextStyle['fontWeight'],
		fontSize: variablesStyles.font5,
	};

	return StyleSheet.create({
		datepickerContainer: {
			backgroundColor: theme.background3,
			paddingHorizontal: variablesStyles.spacing6,
			paddingTop: variablesStyles.spacing6,
			borderRadius: variablesStyles.borderRadius5,
			// rem
		},
		calendarText: {
			color: theme.text1,
			fontSize: variablesStyles.font4,
		},
		weekDays: { ...weekAndHeaderText },
		headerText: { ...weekAndHeaderText },
		arrows: {
			color: theme.text2,
		},
	});
};
