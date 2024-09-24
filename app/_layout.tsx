import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/helpers/hooks/useColorScheme';
import { AppProvider } from '@/context/app-context/app-provider';
import { StatusBar } from 'react-native';
import variablesStyles from '@/styles/variables';
import { themes } from '@/styles/colors';
import { NativeBaseProvider } from 'native-base';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const theme = themes[colorScheme ?? 'dark'];
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<NativeBaseProvider>
			<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
				<AppProvider>
					<StatusBar
						backgroundColor={variablesStyles.colorPrimary}
						barStyle={colorScheme === 'dark' ? 'dark-content' : 'light-content'}
					/>
					<Stack>
						<Stack.Screen
							name='(tabs)'
							options={{
								headerShown: false,
								contentStyle: { backgroundColor: theme.background2 },
							}}
						/>
						<Stack.Screen name='(auth)' options={{ headerShown: false }} />
						<Stack.Screen name='index' options={{ headerShown: false }} />
						<Stack.Screen name='+not-found' />
					</Stack>
				</AppProvider>
			</ThemeProvider>
		</NativeBaseProvider>
	);
}
