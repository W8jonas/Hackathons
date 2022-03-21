import {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Vibration } from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Audio } from 'expo-av';

import { Cube } from './Cube'

import setaEsq from './setaEsq.png'
import coin from './coin.png'
import heart from './heart.png'
import bg from './bg.png'
import correct from './accept.png'
import inCorrect from './cancel.png'


const vermTrans = 'rgba(206, 17, 39, 0.68)'

import {BD} from '../../dados'
import { PopUpModal } from './Modal'
import { routesPaths } from '../../routes/routesPaths'

export function Game({navigation}) {

    const [selectedCountry, setSelectedCountry] = useState('France')

    const [questions, setQuestions] = useState([])
    const [actualQuestionIndex, setActualQuestionIndex] = useState(0)
    const [lifes, setLifes] = useState(3)
    const [timeoutQuestion, setTimeoutQuestion] = useState(10)

    const [showModalFail, setShowModalFail] = useState(false)
    const [modalType, setModalType] = useState()

    const [totalCoins, setTotalCoins] = useState(10)
    const [statusAnswer, setStatusAnswer] = useState()
    const [correctSound, setCorrectSound] = useState();
    const [inCorrectSound, setInCorrectSound] = useState();
    const [soundBG, setSoundBG] = useState()

    async function playSoundBG() {
        const { sound } = await Audio.Sound.createAsync(
           require('./game-51454.mp3')
        );
        setSoundBG(sound);
        await sound.playAsync()
    }

    async function playCorrectSound() {
        const { sound } = await Audio.Sound.createAsync(
           require('./som-positivo.wav')
        );
        setCorrectSound(sound);
        await sound.playAsync()
    }

    async function playInCorrectSound() {
        const { sound } = await Audio.Sound.createAsync(
           require('./som-errado.wav')
        );
        setInCorrectSound(sound);
        await sound.playAsync()
    }

    useEffect(() => {
        return soundBG
          ? () => {
            soundBG.unloadAsync(); }
          : undefined;
    }, [soundBG]);

    useEffect(() => {
        return correctSound
          ? () => {
            correctSound.unloadAsync(); }
          : undefined;
    }, [correctSound]);

    useEffect(() => {
        return inCorrectSound
          ? () => {
            inCorrectSound.unloadAsync(); }
          : undefined;
    }, [inCorrectSound]);

    useEffect(() => {
        const questionsFromCountry = BD.filter(questions => questions.country === selectedCountry)
        setQuestions(questionsFromCountry)
        playSoundBG()
    }, [])

    useEffect(() => {
        if (timeoutQuestion === 0) {
            setShowModalFail(true)
            setModalType(true)
        }
        if (timeoutQuestion === 8) {
            setStatusAnswer(undefined)
        }
    }, [timeoutQuestion])

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeoutQuestion(old => old - 1)
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    function replyQuestion(reply) {
        setTimeoutQuestion(10)
        if (questions[actualQuestionIndex].response === reply) {
            console.log('Acertou - ', reply)
            setTotalCoins(old => old + 10)
            setStatusAnswer(true)
            playCorrectSound()
            Vibration.vibrate(200, 200)
        } else {
            console.log('Errou - ', reply)
            setStatusAnswer(false)
            playInCorrectSound()
            Vibration.vibrate(1000, 1000)
            if (lifes === 0) {
                console.log('Encerra jogo',)
                setShowModalFail(true)
                setModalType(true)
            } else {
                setLifes(lifes - 1)
            }

        }

        if (actualQuestionIndex >= questions.length - 1) {
            console.log('ACABOU O DESAFIO!')
            setTimeoutQuestion(-2)
            setShowModalFail(true)
            setModalType(false)
            return
        }

        setActualQuestionIndex(actualQuestionIndex + 1)
    }

    function navigationTo() {
        if (modalType) {
            setSelectedCountry('Canada')
            setShowModalFail(false)
            setTimeoutQuestion(10)
            setLifes(3)
        } else {
            setSelectedCountry('Suisse')
            setShowModalFail(false)
            setTimeoutQuestion(10)
            setLifes(3)
        }
    }

    if (!questions[actualQuestionIndex]) {
        return <Text style={{position: 'absolute',}}>Carregando</Text>
    }

	return (
		<ImageBackground source={bg} style={styles.container}>

            <View style={styles.header}>
                <Image source={setaEsq}  style={{height: 22, width: 12}} />
                <Text style={styles.headerTitle}> {actualQuestionIndex + 1} - {selectedCountry} </Text>

                <View style={{flexDirection: 'row'}}>
                    <Image source={coin}  style={{height: 27, width: 27}} />
                    <Text style={styles.headerText}> {totalCoins} </Text>
                </View>
            </View>

            <View style={styles.questionContainer}>
                <Text style={{padding: 8, backgroundColor: vermTrans, borderRadius: 20, color: 'white', fontSize: 18}}> {actualQuestionIndex + 1} </Text>

                <View style={{width: '80%', backgroundColor: vermTrans, borderRadius: 8, elevation: 5, justifyContent: 'center', paddingHorizontal: 5, paddingVertical: 6}}>
                    <Text style={{color: 'white', fontSize: 20}} >{questions[actualQuestionIndex].translator}</Text>
                </View>
            </View>
            <Text style={{width: '100%', position: 'relative', top: 35, color: 'white', fontSize: 19, alignSelf: 'flex-start', left: 70}}>{questions[actualQuestionIndex].challenge}?</Text>

            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', top: 240, paddingHorizontal: 10}}>
                <View style={{alignItems: 'center'}}>
                    <Image source={heart}  style={{height: 37, width: 37}} />
                    <Text style={styles.headerText}>{lifes}</Text>
                </View>

                <Text style={{color: 'white', fontSize: 60, fontWeight: 'bold'}}>{timeoutQuestion}</Text>

                <View>
                    <Image source={correct} style={{height: 39, width: 39, marginBottom: 10, opacity: statusAnswer === true ? 1 : 0.4}} />
                    <Image source={inCorrect} style={{height: 39, width: 39, opacity: statusAnswer === false ? 1 : 0.4}} />
                </View>
            </View>

            {questions[actualQuestionIndex]?.options?.length && <GestureHandlerRootView>
                <Cube options={questions[actualQuestionIndex].options} replyQuestion={replyQuestion} />
            </GestureHandlerRootView>}

            <PopUpModal showModal={showModalFail} fail={modalType} onClick={navigationTo} />
		</ImageBackground>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
        paddingHorizontal: 10
	},
    header: {
        marginTop: 250,
        paddingHorizontal: 12,
        borderRadius: 10,
        height: 44,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 69, 135, 0.6)',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    headerText: {
        fontSize: 20,
        color: 'white',
    },
    questionContainer: {
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'space-around', 
        alignItems: 'center',
        position: 'relative',
        top: 30,
    }
})
