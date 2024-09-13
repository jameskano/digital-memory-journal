import { Tabs } from 'expo-router';
import React from 'react';
import { colors, themes } from '@/styles/colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import variablesStyles from '@/styles/variables';
import { useNavigation } from '@react-navigation/native';

export default function TabLayout() {
	const colorSceheme = useColorScheme();
	const theme = themes[colorSceheme ?? 'dark'];
	const navigation = useNavigation();

	return (
		<Tabs
			sceneContainerStyle={{
				backgroundColor: theme.background2,
			}}
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					borderTopRightRadius: variablesStyles.borderRadius5,
					borderTopLeftRadius: variablesStyles.borderRadius5,
					backgroundColor: theme.background1,
					borderWidth: 1,
					borderTopWidth: 1,
					width: '100%',
					// rem
					height: variablesStyles.headerBar,
					borderRightColor: theme.background3,
					borderLeftColor: theme.background3,
				},
				tabBarLabelStyle: {
					// color: theme.text3,
					// rf
					fontSize: variablesStyles.font4,
					marginBottom: variablesStyles.spacing2,
				},
				tabBarActiveTintColor: variablesStyles.colorPrimary,
				tabBarInactiveTintColor: theme.text3,
			}}>
			<Tabs.Screen
				name='today'
				options={{
					title: 'Today',
					tabBarIcon: ({ focused }: { focused: boolean }) => {
						return (
							<Ionicons
								name='heart-half'
								size={24}
								color={focused ? variablesStyles.colorPrimary : theme.text3}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name='calendar'
				options={{
					title: 'Calendar',
					tabBarIcon: ({ focused }: { focused: boolean }) => {
						return (
							<Ionicons
								name='calendar'
								size={24}
								color={focused ? variablesStyles.colorPrimary : theme.text3}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name='mood'
				options={{
					title: '',
					headerShown: true,
					headerLeft: () => (
						<Ionicons
							name='arrow-back'
							size={24}
							color={variablesStyles.colorPrimary}
							style={{ marginLeft: 10 }}
							// onPress={() => navigation.goBack()}
						/>
					),
					tabBarIcon: () => {
						return (
							<Ionicons
								name='add-circle'
								size={55}
								color={variablesStyles.colorPrimary}
								style={{ position: 'absolute', top: -15 }}
								// onPress={() => navigation.navigate('mood')}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name='stats'
				options={{
					title: 'Stats',
					tabBarIcon: ({ focused }: { focused: boolean }) => {
						return (
							<Ionicons
								name='pie-chart'
								size={24}
								color={focused ? variablesStyles.colorPrimary : theme.text3}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name='settings'
				options={{
					title: 'Settings',
					tabBarIcon: ({ focused }: { focused: boolean }) => {
						return (
							<Ionicons
								name='settings'
								size={24}
								color={focused ? variablesStyles.colorPrimary : theme.text3}
							/>
						);
					},
				}}
			/>
		</Tabs>
	);
}
