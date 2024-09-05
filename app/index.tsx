import { Link } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<ScrollView contentContainerStyle={{ height: '100%' }}>
				<Link className='' href='/today'>
					Click here
				</Link>
			</ScrollView>
		</SafeAreaView>
	);
}
