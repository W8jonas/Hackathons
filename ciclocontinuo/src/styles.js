import {StyleSheet} from 'react-native'

export const commonStyle = StyleSheet.create({
	cardStyle:{
		marginLeft: 9,
		marginRight: 9,
		marginBottom: 5,
		borderWidth: 0.5,
		borderRadius: 3,
	},

	cardStyle2:{
		marginLeft: 9,
		marginRight: 9,
		marginBottom: 5,
		borderWidth: 0,
		borderRadius: 3,
	},

    shadows:{
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		
		elevation: 3,
		borderWidth: 0,
	},
	
    shadows2:{
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,

		elevation: 2,
    },

})

export const fonts = StyleSheet.create({
    title1: {
		fontSize: 24,
		color: '#999',
		fontFamily: 'OpenSans-Regular'
    },
    title2: {
		fontSize: 20,
		color: '#999',
		fontFamily: ''
    },
    subTitle1: {
		fontSize: 16,
		color: '#999',
		fontFamily: 'Roboto-Regular'
    },
    text1: {
		fontSize: 20,
		color: '#999',
		fontFamily: 'Roboto-Regular'
    },
    text2: {
		fontSize: 16,
		color: '#999',
		fontFamily: ''
    },
    exit: {
		fontSize: 16,
		color: '#FFF',
		fontFamily: ''
    },

})

export const defaultColors = {

	backPrimaryColor: 'rgb(194, 225, 35)',
	backSecondaryColor: 'rgb(211, 219, 170)',


	primaryColor: 'rgb(123, 219, 83)',
	
	// secondaryColor: 'rgb(211, 219, 170)',


	// laranjaDefault: '#F17F03',
	
	// laranjaDegrade1: 'rgba(255, 146, 28, 1)',
	// laranjaDegrade2: '#EE6400',

	// roxoDegrade1: '#7007DF',
	// roxoDegrade2: 'rgba(80, 0, 166, 1)',

	// azulDegrade1: 'rgba(0, 147, 221, 0.8)',
	// azulDegrade2: 'rgba(28, 196, 252, 0.38)',

	// roxoDegrade3: 'rgba(112, 7, 223, 1)',
	// roxoDegrade3: 'rgba(0, 99, 248, 1)',

}
