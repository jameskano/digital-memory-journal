import { StyleSheet } from 'react-native';

const tabsLayoutStyles = StyleSheet.create({
	header: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		height: 40,
		alignItems: 'center',
		position: 'relative',
		backgroundColor: 'cyan',
	},
	headerTitle: {
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	headerSearch: {
		alignSelf: 'flex-end',
		position: 'absolute',
		top: '50%',
		right: 10,
		transform: 'translate(0, -50%)',
	},
});

export default tabsLayoutStyles;
