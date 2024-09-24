import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { themes } from '@/styles/colors';
import { useColorScheme } from '@/helpers/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import variablesStyles from '@/styles/variables';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'native-base';
import moment from 'moment';
import { useTabsLayoutStyles } from '@/styles/tabsLayout.styles';
import { TabsRouteType } from '@/helpers/types/route';
import { CompositeNavigationProp, NavigationProp } from '@react-navigation/native';

export default function TabLayout() {
	const colorSceheme = useColorScheme();
	const theme = themes[colorSceheme ?? 'dark'];
	const navigation = useNavigation<NavigationProps>();
	const styles = useTabsLayoutStyles();

	const date = moment().format('MMMM D');

	const [lastVisitedTab, setLastVisitedTab] = useState<TabsRouteType | undefined>(undefined);

	useEffect(() => {
		const unsubscribe = navigation.addListener('state', (e: any) => {
			const routeName =
				e.data.state?.routes[0].state?.routes[e.data.state?.routes[0].state.index]?.name;
			if (routeName !== 'mood') {
				setLastVisitedTab(routeName as TabsRouteType);
			}
		});
		return unsubscribe;
	}, [navigation]);

	type NavigationProps = CompositeNavigationProp<
		NavigationProp<Record<TabsRouteType, undefined>>, // Tab navigation prop with defined routes
		any // You can replace `any` with your main navigation type if needed
	>;

	return (
		<Tabs
			sceneContainerStyle={{
				backgroundColor: theme.background2,
			}}
			screenOptions={{
				headerShown: false,
				headerShadowVisible: false,
				tabBarStyle: {
					backgroundColor: theme.background3,
					// borderTopWidth: 1,
					// borderTopColor: theme.background5,
					width: '100%',
					// rem
					height: variablesStyles.headerBar,
				},
				tabBarLabelStyle: {
					// color: theme.text3,
					// rf
					fontSize: variablesStyles.font3,
					marginBottom: variablesStyles.spacing4,
					fontWeight: '700',
				},
				tabBarIconStyle: {
					marginTop: variablesStyles.spacing3,
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
								size={28}
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
								size={28}
								color={focused ? variablesStyles.colorPrimary : theme.text3}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name='mood'
				options={{
					title: date,
					headerTitleAlign: 'center',
					headerTitleStyle: styles.headerTitle,
					headerStyle: styles.header,
					headerShown: true,
					tabBarLabel: '',
					tabBarStyle: { display: 'none' },
					headerLeft: () => (
						<Ionicons
							name='close'
							size={28}
							color={variablesStyles.colorPrimaryDarker}
							style={styles.leftHeader}
							onPress={() => navigation.navigate(lastVisitedTab ?? 'today')}
						/>
					),
					headerRight: () => (
						<Button size='sm' variant='subtle' style={styles.rightHeader}>
							Save
						</Button>
					),
					tabBarIcon: () => {
						return (
							<Ionicons
								name='add-circle'
								size={60}
								color={variablesStyles.colorPrimary}
								style={{ position: 'absolute', top: -20 }}
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
								size={28}
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
								size={28}
								color={focused ? variablesStyles.colorPrimary : theme.text3}
							/>
						);
					},
				}}
			/>
		</Tabs>
	);
}
