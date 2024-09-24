import { StyleSheet } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import variablesStyles from './variables';

export const useCalendarStyles = () => {
	// const {} = useResponsive();

	return StyleSheet.create({
		calendarContainer: {
			// padding: rem(),
			paddingHorizontal: variablesStyles.spacing8,
			paddingVertical: variablesStyles.spacing4,
			// backgroundColor: theme.background1,
			alignItems: 'center',
			height: '100%',
		},
	});
};
