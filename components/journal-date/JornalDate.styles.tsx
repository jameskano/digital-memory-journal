import { useColorScheme } from '@/hooks/useColorScheme';
import variablesStyles from '@/styles/variables';
import { StyleSheet } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { themes } from '@/styles/colors';

const useJournalDateStyles = () => {
	// const { rf, rem } = useResponsive();
	const theme = useColorScheme();

	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			// gap: rem(variablesStyles.spacing1),
			gap: variablesStyles.spacing2,
			paddingVertical: variablesStyles.spacing9,
			marginTop: variablesStyles.spacing9,
			// padding: rem(variablesStyles.spacing3),
			borderTopColor: themes[theme ?? 'dark'].background1,
			borderTopWidth: 1,
		},
		firstContainer: {
			flexDirection: 'row',
			// gap: rem(variablesStyles.spacing1),
			gap: variablesStyles.spacing2,
			paddingVertical: variablesStyles.spacing5,
			// padding: rem(variablesStyles.spacing3),
		},
		dayNum: {
			fontSize: variablesStyles.font9,
			// fontSize: rf(variablesStyles.font7),
			fontWeight: '600',
			color: variablesStyles.colorPrimaryBrighter,
		},
		month: {
			fontSize: variablesStyles.font9,
			// fontSize: rf(variablesStyles.font7),
			fontWeight: '600',
			color: variablesStyles.colorPrimary,
		},
		dayText: {
			// fontSize: rf(variablesStyles.font3),
			fontSize: variablesStyles.font4,
			top: 3,
			color: themes[theme ?? 'dark'].text3,
		},
	});
};

export default useJournalDateStyles;
