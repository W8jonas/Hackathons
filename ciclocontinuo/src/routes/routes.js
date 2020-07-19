import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {View, Image, Text} from 'react-native'

import LoadingScreen from './Loading'
import CreatingValue from '../screens/creatingValue/index'

export default function App() {
	const [loading, setLoading] = useState(true)
	const [appValueShow, setAppValueShow] = useState(false)
	
	setTimeout(() => {
		setLoading(false)
	}, 1500)

	// return <View style={{flex:1, backgroundColor: '#fff'}}>
	// 		<View>
	// 			<Text>arabia</Text>
	// 		</View>
	// 	</View>

	return loading === true 
		? <LoadingScreen/> 
		: appValueShow === false
			? <CreatingValue/> 
			: <View>
				<Text>aramariaria</Text>
			</View>

	// return loading === true 
	// 	? <LoadingScreen loading={loading} appValueShow={appValueShow} isLogged={isLogged}/> 
	// 	: appValueShow === false
	// 		? <CreatingValue/> 
	// 		: isLogged === false
	// 			? <Login/>
	// 			: weKnowYou === false
	// 				? <HowYou/>
	// 				: <View style={{flex:1, backgroundColor: '#fff'}}>
	// 					<AppContainer/>
	// 				</View>
} 

// import Estudar from '../../assets/icons/svg/Estudar'

// import { createStackNavigator } from 'react-navigation-stack'
// import { createAppContainer } from 'react-navigation'
// // import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
// import {createBottomTabNavigator} from 'react-navigation-tabs'


// // GoPremiun
// import GoPremiun from '../screens/GoPremiun/index'

// // Calendar
// import Calendar from '../screens/calendar/index'

// // statistics
// import Statistics from '../screens/statistics/index'

// // Subjects
// import Subjects from '../screens/subjects/index'
// import SubjectsList from '../screens/subjectsList/index'
// import Avaliation from '../screens/avaliation/index'

// // Studying
// import Studying from '../screens/studying/index'
// import StudyingNow from '../screens/studyingNow/index'

// // Articles

// // Config
// import HomeScreen from './App'

// // configurations
// import Configurations from '../screens/configurations/index'

// // creatingValue
// import CreatingValue from '../screens/creatingValue/index'

// // Login
// import Login from '../screens/login/index'

// // HowYou
// import HowYou from '../screens/howYou/index'


// const studyingRouter = createStackNavigator({
// 	studying: {
// 		screen: Studying, 
// 		navigationOptions: {
// 			headerShown: false,
// 			tabBarVisible: false
// 		}
// 	},
// 	studyingNow: {
// 		screen: StudyingNow, 
// 		navigationOptions: {
// 			headerShown: false, 
// 			tabBarVisible: false
// 		}
// 	},
// }, {
// 	initialRouteName: 'studying',
// 	navigationOptions: {
// 		headerShown: null,
// 		hearder: null,
// 	}
// })

// const subjectsRouter = createStackNavigator({
// 	subjects: {
// 		screen: Subjects, 
// 		navigationOptions: {
// 			headerShown: false,
// 		}
// 	},
// 	subjectsList: {
// 		screen: SubjectsList, 
// 		navigationOptions: {
// 			headerShown: false, 
// 		}
// 	},
// 	avaliation: {
// 		screen: Avaliation, 
// 		navigationOptions: {
// 			headerShown: false, 
// 		}
// 	},
// }, {
// 	initialRouteName: 'subjectsList',
// 	// initialRouteParams: {itemName: 's91-st3-oo-alfa-1-0-0'}, 
// 	// initialRouteParams: {itemName: '9p8-cpz-21-', subjectName: 'Fisica'}, 
// 	navigationOptions: {
// 		headerShown: null,
// 		hearder: null
// 	}
// })

// const statisticsRouter = createStackNavigator({
// 	statistics: {
// 		screen: Statistics, 
// 		navigationOptions: {
// 			headerShown: false,
// 		}
// 	},
// 	goPremiun: {
// 		screen: GoPremiun, 
// 		navigationOptions: {
// 			headerShown: false, 
// 		}
// 	},
// }, {
// 	initialRouteName: 'statistics',
// 	navigationOptions: {
// 		headerShown: null,
// 		hearder: null
// 	}
// })


// const AppBottomNavigator = createBottomTabNavigator({
// 	// homeScreen: {
// 	// 	screen: HomeScreen,
// 	// 	navigationOptions: {
// 	// 		title: 'Home',
// 	// 		tabBarIcon: ({ focused, tintColor }) => {
// 	// 			const imageFile = focused
// 	// 				? require('../../assets/icons/calendario.png')
// 	// 				: require('../../assets/icons/calendario.png')
// 	// 			return <Image
// 	// 				style={{height: 25, width: 25}}
// 	// 				focused={focused}
// 	// 				source={imageFile}
// 	// 			/>
// 	// 		}
// 	// 	}
// 	// },
// 	calendar: {
// 		screen: Calendar,
// 		navigationOptions: {
// 			title: 'Atividades',
// 			tabBarIcon: ({ focused, tintColor }) => {
// 				const imageFile = focused
// 					? require('../../assets/icons/calendario.png')
// 					: require('../../assets/icons/calendario.png')
// 				return <Image
// 					style={{height: 28, width: 28, resizeMode: 'contain'}}
// 					focused={focused}
// 					source={imageFile}
// 				/>
// 			}
// 		}
// 	},
// 	subjectsList: {
// 		screen: subjectsRouter,
// 		navigationOptions: {
// 			title: 'Disciplinas',
// 			tabBarIcon: ({ focused, tintColor }) => {
// 				const imageFile = focused
// 					? require('../../assets/icons/disciplinas.png')
// 					: require('../../assets/icons/disciplinas.png')
// 				return <Image
// 					style={{height: 25, width: 30, resizeMode: 'contain'}}
// 					focused={focused}
// 					source={imageFile}
// 				/>
// 			}
// 		}
// 	},
// 	Studying: {
// 		screen: studyingRouter,
// 		navigationOptions: {
// 			title: ' ',
// 			tabBarVisible: false,
// 			tabBarIcon: ({tintColor}) => (
// 				<View style={{ 
// 					alignItems: 'center',
// 					position: 'absolute',
// 					top: -9,
// 					borderRadius: 80,
// 					width: 55,
// 					height: 55,
// 					backgroundColor: '#FF921C'
// 				}}>
// 					<Estudar style={{marginTop: 5}} width={33} height={33} />
// 					<Text style={{
// 						position: 'relative', color: '#fff', bottom: 4, fontSize: 11}}>Estudar</Text>
// 				</View>
// 			)
// 		}
// 	},
// 	statistics: {
// 		screen: statisticsRouter,
// 		navigationOptions: {
// 			title: 'Estatísticas',
// 			tabBarIcon: ({ focused, tintColor }) => {
// 				const imageFile = focused
// 					? require('../../assets/icons/estatisticas.png')
// 					: require('../../assets/icons/estatisticas.png')
// 				return <Image
// 					style={{height: 40, width: 40, resizeMode: 'contain'}}
// 					focused={focused}
// 					source={imageFile}
// 				/>
// 			}
// 		}
// 	},
// 	configurations: {
// 		screen: Configurations,
// 		navigationOptions: {
// 			title: 'Mais',
// 			tabBarIcon: ({ focused, tintColor }) => {
// 				const imageFile = focused
// 					? require('../../assets/icons/mais.png')
// 					: require('../../assets/icons/mais.png')
// 				return <Image
// 					style={{height: 30, width: 30, marginTop: 5, resizeMode: 'contain'}}
// 					focused={focused}
// 					source={imageFile}
// 				/>
// 			}
// 		}
// 	},
// },{
// 	initialRouteName: 'calendar',
// 	activeColor: '#f0edf6',
// 	inactiveColor: '#3e2465',
// 	barStyle: { backgroundColor: '#694fad' },
// }
// )


// export const AppContainer = createAppContainer(AppBottomNavigator)


// export default function App() {
// 	const [loading, setLoading] = useState(true)

// 	const [appValueShow, setAppValueShow] = useState(false)
//     const _appValueShow = useSelector((state) => state.userState.app.appValueShow)
// 	useEffect(()=>{setAppValueShow(_appValueShow)}, [_appValueShow])

// 	const [isLogged, setIsLogged] = useState(false)
//     const _isLogged = useSelector((state) => state.userState.app.isLogged)
// 	useEffect(()=>{setIsLogged(_isLogged)}, [_isLogged])
    

// 	const [weKnowYou, setWeKnowYou] = useState(false)
//     const _weKnowYou = useSelector((state) => state.userState.app.weKnowYou)
// 	useEffect(()=>{setWeKnowYou(_weKnowYou)}, [_weKnowYou])
    
// 	setTimeout(() => {
// 		setLoading(false)
// 	}, 1500)


// 	return <View style={{flex:1, backgroundColor: '#fff'}}>
// 				<AppContainer/>
// 			</View>

// 	return loading === true 
// 			? <LoadingScreen loading={loading} appValueShow={appValueShow} isLogged={isLogged}/> 
// 			: appValueShow === false
// 				? <CreatingValue/> 
// 				: isLogged === false
// 					? <Login/>
// 					: weKnowYou === false
// 						? <HowYou/>
// 						: <View style={{flex:1, backgroundColor: '#fff'}}>
// 							<AppContainer/>
// 						</View>
// }

