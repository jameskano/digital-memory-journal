import { StyleSheet } from 'react-native';
import variablesStyles from '@/styles/variables';
import { useResponsive } from 'react-native-responsive-hook';
import { themes } from '@/styles/colors';
import { useColorScheme } from '@/helpers/hooks/useColorScheme';

const useJournalEntryStyles = () => {
	// const { rem, rf } = useResponsive();
	const currentTheme = useColorScheme();

	return StyleSheet.create({
		container: {
			paddingTop: variablesStyles.spacing10,
			// padding: rem(variablesStyles.spacing3),
		},
		firstContainer: {},
		hour: {
			color: variablesStyles.colorPrimary,
			// fontSize: rf()
			fontSize: variablesStyles.font4,
		},
		title: {
			fontSize: variablesStyles.font6,
			fontWeight: '600',
			// fontSize: rf(variablesStyles.font6),
			color: themes[currentTheme ?? 'dark'].text1,
		},
		text: {
			fontSize: variablesStyles.font6,
			// fontSize: rf(variablesStyles.font5),
			color: themes[currentTheme ?? 'dark'].text2,
		},
	});
};

export default useJournalEntryStyles;
