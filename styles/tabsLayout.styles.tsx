import { StyleSheet, useColorScheme } from 'react-native';
import { themes } from './colors';
import variablesStyles from './variables';

export const useTabsLayoutStyles = () => {
	// const {} = useResponsive();
	const colorScheme = useColorScheme();
	const theme = themes[colorScheme ?? 'dark'];

	return StyleSheet.create({
		header: {
			backgroundColor: theme.background2,
		},
		headerTitle: {
			fontSize: variablesStyles.font6,
			// rf
		},
		leftHeader: {
			// rem
			marginLeft: variablesStyles.spacing8,
		},
		rightHeader: {
			// rem
			marginRight: variablesStyles.spacing8,
		},
	});
};
