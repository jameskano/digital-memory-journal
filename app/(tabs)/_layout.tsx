import { Tabs } from 'expo-router';
import React from 'react';
import { colors, themes } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import styles from '@/styles/tabs-layout';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Journal name</Text>
				<Ionicons name='search' size={24} style={styles.headerSearch} />
			</View>

			<Tabs
				screenOptions={{
					tabBarActiveTintColor: themes[colorScheme ?? 'light'].tint,
					headerShown: false,
				}}>
				<Tabs.Screen
					name='today'
					options={{
						title: 'Today',
						tabBarIcon: (focused: boolean) => {
							return (
								<Ionicons
									name='book'
									size={24}
									color={focused ? colors.barIconFocused : colors.barIcon}
								/>
							);
						},
					}}
				/>
				<Tabs.Screen
					name='calendar'
					options={{
						title: 'Calendar',
						tabBarIcon: (focused: boolean) => {
							return (
								<Ionicons
									name='calendar'
									size={24}
									color={focused ? colors.barIconFocused : colors.barIcon}
								/>
							);
						},
					}}
				/>
				<Tabs.Screen
					name='more'
					options={{
						title: 'More',
						tabBarIcon: (focused: boolean) => {
							return (
								<Ionicons
									name='ellipsis-horizontal-circle-sharp'
									size={24}
									color={focused ? colors.barIconFocused : colors.barIcon}
								/>
							);
						},
					}}
				/>
				<Tabs.Screen
					name='settings'
					options={{
						title: 'Settings',
						tabBarIcon: (focused: boolean) => {
							return (
								<Ionicons
									name='settings'
									size={24}
									color={focused ? colors.barIconFocused : colors.barIcon}
								/>
							);
						},
					}}
				/>
			</Tabs>
		</>
	);
}
