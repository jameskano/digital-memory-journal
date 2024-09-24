import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { MoodSphereType } from './MoodSphere.types';
import { useMoodSphereStyles } from './MoodSphere.styles';

const MoodSphere = ({ colors, shadowColor }: MoodSphereType) => {
	const styles = useMoodSphereStyles(shadowColor);

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={colors}
				start={{ x: 0.3, y: 0.3 }}
				end={{ x: 1, y: 1 }}
				style={styles.sphere}
			/>
		</View>
	);
};

export default MoodSphere;
