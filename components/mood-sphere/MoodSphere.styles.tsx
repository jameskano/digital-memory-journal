import { StyleSheet } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';

export const useMoodSphereStyles = (shadowColor: string) => {
	// const {} = useResponsive();

	return StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		sphere: {
			// rem
			width: 50,
			height: 50,
			borderRadius: 50,
			shadowColor: shadowColor,
			shadowOffset: { width: 5, height: 5 },
			shadowOpacity: 0.5,
			shadowRadius: 15,
			elevation: 20,
		},
	});
};
