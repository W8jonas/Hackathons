import React, {useState, useEffect} from 'react'

// assets
import setinhaPraCima from '../../assets/icons/setinhaPraCima.png'
import setinhaPraBaixo from '../../assets/icons/setinhaPraBaixo.png'
import cadeado from '../../assets/icons/cadeado.png'

import fotoJonas from '../../assets/icons/fotoJonas.png'
import fotoVictor from '../../assets/icons/fotoVictor.png'
import fotoLucas from '../../assets/icons/fotoLucas.png'

// components 
import Employee from '../../components/Employee'
import ModalAceno from './components/ModalAceno'
import WarningEvent from './components/warningEvent'

// Functions


import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'


const COLEGAS_DE_TRABALHO = [
	{
		id: 1,
		name: "Jonas Henrique",
		acenarPreto: true,
		ligarPreto: true,
		image: fotoJonas
	},
	{
		id: 2,
		name: "Victor Hugo",
		acenarPreto: true,
		ligarPreto: false,
		image: fotoVictor
	},
	{
		id: 3,
		name: "Lucas Louzada",
		acenarPreto: false,
		ligarPreto: false,
		image: fotoLucas
	},
	// {
	// 	id: 4,
	// 	name: "Antônio Vasconcelos",
	// 	acenarPreto: false,
	// 	ligarPreto: true,
	// },
	// {
	// 	id: 5,
	// 	name: "Marcos Luís",
	// 	acenarPreto: false,
	// 	ligarPreto: false,
	// },
]


const OnlineOffice = () => {
	const [showModal, setShowModal] = useState(false)

	useEffect(()=>{
		setTimeout(() => {
			setShowModal(true)
		}, 10000)
	}, [])

    return (
		<View style={style.container}>
			
			<WarningEvent />

			<Text style={[style.title, {marginTop: 20, marginBottom: 5}]}>
				Salas
			</Text>

			<View style={style.freeRooms}>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 35}}>
					<View style={{flexDirection: 'row', alignItems: 'center'}}>
						<Text style={style.title}>
							Salas livres
						</Text>
					</View>
					<Image resizeMode="contain" style={{width: 20, marginRight: 10}} source={setinhaPraBaixo}/>
				</View>
			</View>

			<View style={style.closedRooms}>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 35}}>
					<View style={{flexDirection: 'row', alignItems: 'center'}}>
						<Text style={style.title}>
							Salas Fechadas
						</Text>
						<Image resizeMode="contain" style={{width: 15, marginLeft: 5}} source={cadeado}/>
					</View>
					<Image resizeMode="contain" style={{width: 20, marginRight: 10}} source={setinhaPraCima}/>
				</View>

				<View style={{paddingHorizontal: 3}}>
					<Text style={style.caption}>
						🔊   🎉 Niver do Lucas
					</Text>

					<Text style={style.caption}>
						🔊   💻 Hard Work
					</Text>

					<Text style={style.caption}>
						🔊   🏴 Black Project
					</Text>
				</View>
			</View>

			<View style={{marginTop: 10, marginBottom: 5}}>
				<Text style={style.title}>
					Colegas de trabalho
				</Text>
			</View>

			<ScrollView>
				{COLEGAS_DE_TRABALHO.map(user=>(
					<Employee key={user.id} {...user}/>
				))}
			</ScrollView>
			
			{showModal && 
			<ModalAceno
				onCancel={()=>setShowModal(false)}
			/>
			}
		</View>
    )
}


const style = StyleSheet.create({
	container: {
		flex:1,
		paddingHorizontal: 15,
		backgroundColor: '#FFF'
	},
	freeRooms: {
		justifyContent: 'center',
		paddingVertical: 20,
		paddingHorizontal: 10,
		height: 30,	
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 8,
		backgroundColor: '#94F1F1'
	},
	closedRooms: {
		justifyContent: 'center',
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 8,
		backgroundColor: '#94F1F1'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#3A3A3A'
	},
	caption: {
		fontSize: 18,
		color: '#3A3A3A',
		fontWeight: 'bold',
		borderTopWidth: 0.9,
		borderTopColor: "#808080",
		marginTop: 5,
		marginBottom: -7,
		lineHeight: 45,
	}
})

export default OnlineOffice
