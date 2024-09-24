import { StyleSheet } from 'react-native';
import variablesStyles from '@/styles/variables';
import { useResponsive } from 'react-native-responsive-hook';
import { useColorScheme } from '@/helpers/hooks/useColorScheme';
import { themes } from './colors';

const useTodayStyles = () => {
	// const { rem } = useResponsive();
	const colorScheme = useColorScheme();
	const theme = themes[colorScheme ?? 'dark'];

	return StyleSheet.create({
		todayScreen: {
			// padding: rem(),
			paddingHorizontal: variablesStyles.spacing8,
			paddingVertical: variablesStyles.spacing4,
			// backgroundColor: theme.background1,
			alignItems: 'center',
			justifyContent: 'center',
			height: '100%',
		},
		todayTitle: {
			color: theme.text1,
			fontSize: variablesStyles.font8,
			// rf
			marginTop: variablesStyles.spacing15,
			// rem
			bottom: variablesStyles.headerBar,
		},
		imageBackground: {
			// rem
			marginVertical: variablesStyles.spacing15,
			width: '100%',
			height: '100%',
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		header: {
			display: 'flex',
			flexDirection: 'row',
			width: '100%',
			justifyContent: 'space-between',
			paddingHorizontal: variablesStyles.spacing8,
			paddingVertical: variablesStyles.spacing4,
			// rem
			alignItems: 'center',
			position: 'relative',
			backgroundColor: variablesStyles.colorPrimary,
		},
		headerTitle: {
			// rem
			// paddingLeft: variablesStyles.spacing8,
			// rf
			fontSize: variablesStyles.font8,
		},
	});
};

export default useTodayStyles;
