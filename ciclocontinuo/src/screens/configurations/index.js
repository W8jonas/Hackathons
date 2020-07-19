import React, {useState, useEffect, useRef} from 'react'
//assets
import IMG_TESTE from "../../planodefundo.jpg"
import Sino from "../../../assets/icons/notific.png"
import InfoAluno from "../../../assets/icons/infoaluno.png"
import Mais from "../../../assets/icons/indique.png"
import User from "../../../assets/icons/svg/User"

import {style} from './indexStyle'

//Compoennts
import AdmobBanner from '../../commons/AdmobBanner'
import ModalContact from './modalContact'
import ModalDefault from './modalDefault'
import ModalTerms from '../../commons/modalTermsOfUse'
import ModalLanguage from './modalLanguage'
import LinearGradient from 'react-native-linear-gradient'


//funciots
import { useSelector, useDispatch } from 'react-redux'
import { translate } from '../../locales/index'
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth'
import { _getAllPontuation } from "../../functions/functionsFirebase";
import { View, Text, TouchableOpacity, Image, Alert, Button, ScrollView } from 'react-native'


export default function Configurations() {
	const dispatch = useDispatch()
	
	const [modalContact, setModalContact] = useState(false)
	const [modalDefault, setModalDefault] = useState(false)
	const [modalTerms, setModalTerms] = useState(false)
	const [modalLanguage, setModalLanguage] = useState(false)

	const [name, setName] = useState(false)

	const [totalScore, setTotalScore] = useState('Carregando...')


    useEffect(()=>{
        async function getAllPontuation() {
        	const uid = firebase.auth().currentUser.uid
            try {
                const data = await _getAllPontuation(uid)
				console.log('Data obtido: ', data)
				setTotalScore('Sem conexão')
				if(data){
					setTotalScore(data)
				}

            } catch (error) {
                console.log('deu erro na doScore: ', error)
                setTotalScore('Sem conexão')
            }
        }
        getAllPontuation()
    },[])


	const _name = useSelector((state) => state.userState.account.nickName)
	useEffect(()=>{setName(_name)}, [_name])

	function handleLogOff() {
		dispatch({type: 'LOG_OFF'})
		auth().signOut()
	}
	
  return (
    <View style={{flex:1}}>

		<AdmobBanner/>

		<ScrollView>
		
			<View style={{height: 300}}>

				<View style={{alignItems: 'center', justifyContent: 'center', height: 200}}>
					<TouchableOpacity style={{height: 95, width: 95, borderRadius: 100, borderWidth: 1}}>
						{/* <Image
							source={IMG_TESTE}
							style={{resizeMode: 'cover', height: 95, width: 95, borderRadius: 100}}
						/> */}
						<User width={95} height={95} style={{marginTop: 10,}}/>
					</TouchableOpacity>
					<Text style={{fontSize: 22}}>@{name}</Text>
					<Text style={{fontSize: 22}}>{totalScore}</Text>
				</View>

				<View style={{paddingHorizontal: 10,flexDirection: 'row', justifyContent: 'space-between', height: 100}}>
					<View style={{marginTop: -20}}>
						<TouchableOpacity onPress={()=>setModalDefault(true)} style={{marginLeft: 30, height: 60, width: 60, borderRadius: 100, borderWidth: 1, justifyContent: 'center'}}>
							<Image
								source={Sino}
								style={{height: 35, width: 35, alignSelf: 'center'}}
							/>
						</TouchableOpacity>
					</View>
					
					<View style={{marginTop: 40}}>
						<TouchableOpacity onPress={()=>setModalDefault(true)} style={{height: 60, width: 60, borderRadius: 100, borderWidth: 1, justifyContent: 'center'}}>
							<Image
								source={InfoAluno}
								style={{height: 35, width: 35, alignSelf: 'center'}}
							/>
						</TouchableOpacity>
					</View>

					<View style={{marginTop: -20}}>
						<TouchableOpacity onPress={()=>setModalDefault(true)} style={{marginRight: 30, height: 60, width: 60, borderRadius: 100, borderWidth: 1, justifyContent: 'center'}}>
							<Image
								source={Mais}
								style={{height: 35, width: 35, alignSelf: 'center'}}
							/>
						</TouchableOpacity>
					</View>

				</View>

			</View>

			<Text style={style.title2}>Suporte</Text>
			<View style={[style.infos, {height: 155}]}>
				<TouchableOpacity style={style.buttonContainer} onPress={()=>setModalLanguage(true)}>
					<Text style={style.subTitle}>Linguagem</Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.buttonContainer} onPress={()=>setModalDefault(true)}>
					<Text style={style.subTitle}>Avaliar o app</Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.buttonContainer} onPress={()=>setModalContact(true)}>
					<Text style={style.subTitle}>Nosso contato</Text>
				</TouchableOpacity>
			</View>

			<View style={style.infos}>
				<Text style={style.title}>Promoções</Text>
				<TouchableOpacity style={style.buttonContainer} onPress={()=>setModalDefault(true)}>
					<Text style={style.subTitle}>Inserir código promocional</Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.buttonContainer} onPress={()=>setModalDefault(true)}>
					<Text style={style.subTitle}>Plano premium</Text>
				</TouchableOpacity>
			</View>

			<View style={[style.infos, {height: 195}]}>
				<Text style={style.title}>Sobre a LearnI:</Text>
				<TouchableOpacity style={style.buttonContainer} onPress={()=>setModalDefault(true)}>
					<Text style={style.subTitle}>Termos de uso</Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.buttonContainer} onPress={()=>setModalDefault(true)}>
					<Text style={style.subTitle}>Política e privacidade</Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.buttonContainer} onPress={()=>setModalDefault(true)}>
					<Text style={style.subTitle}>Bibliotecas abertas</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity  onPress={handleLogOff}>
				<LinearGradient
					style={style.bottomButtom}
					colors={['#FF6565', '#E82F2F']}
					start={{ x: 0, y: 0 }}
					end={{ x:1, y: 1 }}
				>
					<Text style={style.subTitle}>Sair</Text>
				</LinearGradient>
			</TouchableOpacity>
					
		</ScrollView>

		<Text></Text>
		<Text></Text>

		<ModalTerms
			isVisible={modalTerms}
			onCancel={()=>{setModalTerms(false)}}
		/>

		<ModalContact
			isVisible={modalContact}
			onCancel={()=>{setModalContact(false)}}
		/>

		<ModalDefault
			isVisible={modalDefault}
			onCancel={()=>{setModalDefault(false)}}
		/>

		<ModalLanguage
			isVisible={modalLanguage}
			onCancel={()=>{setModalLanguage(false)}}
		/>

    </View>
  )
}
