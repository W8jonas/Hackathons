import 'react-native-gesture-handler';

import {useRef, useEffect, useState} from 'react'
import { StyleSheet, Text, View, Animated, Button, Alert } from 'react-native';
import { Directions, FlingGestureHandler, PanGestureHandler, RectButton, TapGestureHandler  } from 'react-native-gesture-handler';
import { Rect } from 'react-native-svg';


export function Cube({replyQuestion, options}) {
    const rotateBottom = useRef(new Animated.Value(0)).current;

    function _moveBottom(duration, delay) {
        Animated.timing(rotateBottom, {
            toValue: 1,
            duration: duration,
            delay: delay,
            useNativeDriver: false
          }).start();
    }

    function _moveTop(duration, delay) {
        Animated.timing(rotateBottom, {
            toValue: 0,
            duration: duration,
            delay: delay,
            useNativeDriver: false
          }).start();
    }

    function moveTop() {
        rotateBottom.setValue(1)
        _moveTop(200, 0)
        replyQuestion(options[0])
    }

    function moveBottom() {
        rotateBottom.setValue(0)
        _moveBottom(200, 0)
        replyQuestion(options[1])
        
        // setTimeout(() => {
        //     _moveTop(20, 0)
        // }, 400);
    }

	return (
		<View style={[styles.container]}>
            <FlingGestureHandler
                enabled
                direction={Directions.UP}
                onEnded={() => {
                    moveTop()
                }}
            >
                <View style={{height: 150, width: 250, backgroundColor: 'rgba(22, 22, 22, 0.1)', position: 'relative', top: 270, zIndex: 5}} />
            </FlingGestureHandler>

            <Animated.View
                style={[
                    styles.faceTop,
                    {
                        transform: [
                            { rotateX: rotateBottom.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["45deg", "-45deg"],
                              }) },
                            { rotateY: "0deg" }
                        ]
                    },
                    {
                        top: rotateBottom.interpolate({
                            inputRange: [0, 1],
                            outputRange: [295 - 50, 445 - 50],
                        })
                    },
                ]}
                >

                <Text 
                style={{fontSize: 22, fontWeight: 'bold', color: 'white', alignSelf: 'center', textAlign: 'center'}}>
                    {options[0]}
                </Text>
            </Animated.View>
            
            <Animated.View
                style={[
                    styles.faceBack,
                    {
                        transform: [
                            { rotateX: rotateBottom.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["90deg", "45deg"],
                              }) },
                        ]
                    },
                    {
                        top: rotateBottom.interpolate({
                            inputRange: [0, 1],
                            outputRange: [350 - 50, 300 - 50],
                        })
                    },
                ]}
                >
                <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white', alignSelf: 'center', textAlign: 'center'}}>{options[1]}</Text>
            </Animated.View>

            <Animated.View
                style={[
                    styles.faceFront,

                    {
                        transform: [
                            { rotateX: rotateBottom.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["-45deg", "0deg"],
                              }) },
                        ]
                    },
                    {
                        top: rotateBottom.interpolate({
                            inputRange: [0, 1],
                            outputRange: [443 - 50, 295 - 50],
                        })
                    },
                    {opacity: rotateBottom.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0],
                    })}
                ]}
            >
                <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white', alignSelf: 'center', textAlign: 'center'}}>{options[1]}</Text>
            </Animated.View>

            <View style={{height: 600}} />

            <FlingGestureHandler
                enabled
                direction={Directions.DOWN}
                onEnded={() => {
                    moveBottom()
                }}
            >
                <View style={{height: 150, width: 250, backgroundColor: 'rgba(22, 22, 22, 0.1)', position: 'relative', top: -290, zIndex: 5}} />
            </FlingGestureHandler>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
    faceTop: {
        width: 200,
        height: 200,
        backgroundColor: '#1F1F1F',
        position: 'absolute',
        top: 250,
        zIndex: 1
    },
    faceBack: {
        width: 200,
        height: 200,
        backgroundColor: '#2E2E2E',
        position: 'absolute',
        zIndex: 0
    },
    faceFront: {
        width: 200,
        height: 200,
        backgroundColor: '#2E2E2E',
        position: 'absolute',
        top: 400,
        zIndex: 0
    },
});
