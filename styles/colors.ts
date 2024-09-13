/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import variablesStyles from '@/styles/variables';

export const themes = {
	light: {
		text1: variablesStyles.colorTextBlack1,
		text2: variablesStyles.colorTextBlack2,
		text3: variablesStyles.colorTextBlack3,
		background1: variablesStyles.colorBackgroundLight1,
		background2: variablesStyles.colorBackgroundLight2,
		background3: variablesStyles.colorBackgroundLight3,
		background4: variablesStyles.colorBackgroundLight4,
		background5: variablesStyles.colorBackgroundLight5,
		icon: '#687076',
	},
	dark: {
		text1: variablesStyles.colorTextWhite1,
		text2: variablesStyles.colorTextWhite2,
		text3: variablesStyles.colorTextWhite3,
		background1: variablesStyles.colorBackgroundDark1,
		background2: variablesStyles.colorBackgroundDark2,
		background3: variablesStyles.colorBackgroundDark3,
		background4: variablesStyles.colorBackgroundDark4,
		background5: variablesStyles.colorBackgroundDark5,
		icon: '#9BA1A6',
	},
};

export const colors = {
	barIcon: '',
	barIconFocused: '',
};
