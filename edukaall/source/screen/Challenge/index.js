import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'

// Modules
import { LinearGradient } from 'expo-linear-gradient';

// Assets
import chatIcon from '../../assets/chat-icon.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseGradients } from '../../config/style';
import { firestoreDatabase } from '../../services/firebase';
import { Question } from './Question';
import { routesPaths } from '../../routes/routesPaths';

export function Challenge({navigation}) {

    const [challengeData, setChallengeData] = useState({})
    const [actualQuestionIndex, setActualQuestionIndex] = useState(1)
    const [loading, setLoading] = useState(false)
    const [answer, setAnswer] = useState([])

	useEffect(() => {

		async function fetchFeedPosts() {
			firestoreDatabase.collection('challenge').doc('igT1F1ArUWSP025m6H7O')
				// .where('storeId', '==', storeData.id)
				// .orderBy('rating', 'desc')
				.get()
				.then((document) => {
					const challengeDataDoc = { id: document.id, ...document.data() }
                    
					setChallengeData(challengeDataDoc)
                    setLoading(true)
				})
				.catch((error) => {
					console.log('error: ', error)
				})
		}

        fetchFeedPosts()
	}, [])

    function onSelectedAnswer(selectedAnswer) {
        setAnswer([...answer, selectedAnswer])

        if (challengeData.questions.length === actualQuestionIndex) {
            const totalCorrectAnswers = challengeData.questions.reduce((totalCorrectAnswers, value, index) => {
                totalCorrectAnswers = value.correct === answer[index] ? totalCorrectAnswers + 1 : totalCorrectAnswers
                return totalCorrectAnswers
            }, 0)
            navigation.navigate(routesPaths.score, {totalCorrectAnswers})
        } else {
            setActualQuestionIndex((oldIndex) => oldIndex + 1)
            setCounter(120)
        }
    }

    const [counter, setCounter] = useState(120)

    useEffect(() => {
        if (counter === 0){
            setCounter(120)
            onSelectedAnswer(null)
            return
        }

        const time = setInterval(() => {
            setCounter((counter) => counter - 1)
        }, 1000);
    
        return () => {
            clearInterval(time);
        }
    }, [counter]);

    return (
        <LinearGradient
            colors={baseGradients.linearBlue.colors}
            style={styles.linearContainer}
            start={baseGradients.linearBlue.start}
            end={baseGradients.linearBlue.end}
        >
            <ScrollView style={styles.container}>
                <View style={{height: 50}} />

                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                    <View style={{width: '49%', backgroundColor: '#ccc', height: 150}}>
                    </View>
                    <View style={{width: '49%', backgroundColor: '#ccc', height: 150}}>
                    </View>
                </View>

                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginVertical: 20, alignItems: 'center'}}>
                    <TouchableOpacity>
                        <Image source={chatIcon} style={{height: 40, width: 40, resizeMode: 'cover'}} />
                        <ResponsiveText p style={{position: 'absolute', right: -8, top: -8, backgroundColor: '#FF5C00', paddingHorizontal: 5, borderRadius: 30, color: '#FFF'}} >
                            1
                        </ResponsiveText>
                    </TouchableOpacity>
                    
                    <View style={{height: 50, width: 50, borderRadius: 50, backgroundColor: '#F8F8F840', justifyContent: 'center', alignItems: 'center'}}>
                        <ResponsiveText h5 style={{color: '#FFF'}}>
                            {actualQuestionIndex}/5
                        </ResponsiveText>
                    </View>

                    <View style={{height: 40, width: 100, borderRadius: 20, backgroundColor: '#F8F8F840', justifyContent: 'center', alignItems: 'center'}}>
                        <ResponsiveText h4 style={{color: '#FFF'}}>
                            {counter}
                        </ResponsiveText>
                    </View>
                </View>

                {loading && <Question questionData={challengeData.questions[actualQuestionIndex - 1]} onSelectedAnswer={onSelectedAnswer} />}

                {!actualQuestionIndex && <View style={{width: '85%', alignSelf: 'center', marginBottom: 30}}>
                    <ResponsiveText h4 style={{color: '#FFF', textAlign: 'left'}}>
                        Dica: O seu desafio só sera concluído quando ambos marcarem a mesma opção.
                    </ResponsiveText>
                </View>}

            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
})
