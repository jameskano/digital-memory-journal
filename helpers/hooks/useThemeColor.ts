/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';

import { themes } from '@/styles/colors';

export function useThemeColor(
	props: { light?: string; dark?: string },
	colorName: keyof typeof themes.light & keyof typeof themes.dark,
) {
	const theme = useColorScheme() ?? 'dark';
	const colorFromProps = props[theme];

	if (colorFromProps) {
		return colorFromProps;
	} else {
		return themes[theme][colorName];
	}
}
