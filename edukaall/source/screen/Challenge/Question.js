import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

// Modules

// Assets
import Icon1 from '../../assets/polygon.png'
import Icon2 from '../../assets/Rectangle.png'
import Icon3 from '../../assets/ellipse.png'
import Icon4 from '../../assets/star.png'
import FeedbackBom from '../../assets/FeedbackBom.png'
import FeedbackRuim from '../../assets/FeedbackRuim.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'


export function Question({ questionData, onSelectedAnswer }) {

    const [selected, setSelected] = useState('')
    const [showFeedback, setShowFeedback] = useState(false)
    const [feedback, setFeedback] = useState(false)

    function getIconAndColor(icon_) {
        switch (icon_ + 1) {
            case 1:
                return {icon: Icon1, color: '#FF4545'}
        
            case 2:
                return {icon: Icon2, color: '#85FF5A'}
        
            case 3:
                return {icon: Icon3, color: '#29EDCA'}
        
            case 4:
                return {icon: Icon4, color: '#9D48F2'}
        
            default:
                return {icon: Icon1, color: '#FF4545'}
        }
    }

    useEffect(() => {
        if (selected) {
            setFeedback(questionData.correct === selected)
            setShowFeedback(true)
            setTimeout(() => {
                onSelectedAnswer(selected)
                setShowFeedback(false)
            }, 2500);
        }
        setSelected(null)
    }, [selected])

    return (
        <View>

            <View style={{width: '90%', paddingVertical: 10, marginBottom: 10, paddingLeft: 10, alignSelf: 'flex-end', borderTopLeftRadius: 30, borderBottomLeftRadius: 30, backgroundColor: '#F8F8F840', justifyContent: 'center', alignItems: 'center'}}>
                <ResponsiveText h4 bold style={{color: '#3A3A3A', textAlign: 'left', width: '90%'}}>
                    {questionData.question}
                </ResponsiveText>
            </View>

            {questionData.answers.map((item, index) => (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setSelected(item.id)}
                    key={item.id}
                    style={[
                        { flexDirection: 'row', paddingLeft: 20, width: '85%', alignSelf: 'center', paddingVertical: 10, marginVertical: 10, borderRadius: 20, backgroundColor: getIconAndColor(index).color, justifyContent: 'center', alignItems: 'center'},
                        selected === item.id && {borderWidth: 2, borderColor: '#FFF'}
                    ]}
                >
                    <Image source={getIconAndColor(index).icon} style={{height: 30, width: 30, resizeMode: 'cover'}} />
                    
                    <ResponsiveText h4 bold style={{color: '#3A3A3A', paddingLeft: 10, textAlign: 'left', width: '90%'}}>
                        {item.text}
                    </ResponsiveText>
                </TouchableOpacity>
            ))}

            {showFeedback && (
                <View>
                    {feedback ? (
                        <View style={{width: '90%', backgroundColor: '#ccc', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', borderRadius: 20, height: 50}}>
                            <Image source={FeedbackBom} style={{height: 50, width: 50, resizeMode: 'cover'}} />
                            <ResponsiveText h4 bold style={{color: '#3A3A3A', paddingHorizontal: 10, textAlign: 'left', width: '90%'}}>
                                Sua dupla acertou a última questão, parabéns!
                            </ResponsiveText>
                        </View> ) : (
                        <View style={{width: '90%', backgroundColor: '#ccc', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', borderRadius: 20, height: 50}}>
                            <Image source={FeedbackRuim} style={{height: 50, width: 50, resizeMode: 'cover'}} />
                            <ResponsiveText h4 bold style={{color: '#3A3A3A', paddingHorizontal: 10, textAlign: 'left', width: '90%'}}>
                                Sua dupla errou a última questão.
                            </ResponsiveText>
                        </View>
                    )}
                </View>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white'
    }
})
