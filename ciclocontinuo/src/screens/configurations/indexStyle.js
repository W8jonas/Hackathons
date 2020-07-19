import {StyleSheet} from 'react-native'
import {commonStyle, fonts} from '../../styles'

export const style = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: '#FFF',
	},
	header: {
		borderBottomWidth: 1,
		borderColor: '#ccc',
		flexDirection: 'row',
		justifyContent: 'space-between', 
		alignItems: 'center',
	},
	infos: {
		marginTop: 7, 
		marginBottom: 7,
        height: 140,
		...commonStyle.cardStyle2,
		...commonStyle.shadows2
	},
	buttonContainer: {
		width: '100%', 
		borderBottomColor: '#222', 
        height: 50,
        justifyContent: 'center'
	},
	bottomButtom: {
        backgroundColor: '#FF6565',
        marginLeft: 9, 
        marginRight: 9,
        marginTop: 15,
		borderBottomColor: '#222', 
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'
	},
	title: {
		fontFamily: 'OpenSans-Regular',
		fontSize: 18,
		marginTop: 15,
		marginLeft: 18,
		color: '#FF921C'
	},
	title2: {
		fontFamily: 'Roboto-Regular',
		fontSize: 22,
		marginBottom: 4,
		marginTop: 15,
		marginLeft: 18,
		color: '#666'
	},
	subTitle: {
		fontFamily: 'OpenSans-Regular',
		fontSize: 16,
		marginLeft: 18,
		color: '#666',
	},
	text:{
		marginTop: 5,
		marginBottom: 5,
		paddingHorizontal:10,
		marginRight: 10,
	},
	taskTitle:{
		alignSelf: 'flex-start',
		marginLeft: 20,
		marginTop: 10,
		marginBottom: 10,
	},
	textButton: {
		alignSelf: 'center', 
	}
})
