import { View, Modal, StyleSheet, Text, TouchableOpacity } from 'react-native'

import LottieView from 'lottie-react-native';

import anim1 from './51923-crying.json'
import anim2 from './72821-gold-coin.json'


export function PopUpModal({showModal, fail, onClick}) {

    const textTop = fail === true ? 'Ahh não! Seu desafio não foi concluído.' : 'Parabéns!! Você completou seu desafio!'
    const textButton = fail === true ? 'Tentar novamente' : 'Ir para próximo país'
    const animation = fail ? anim1 : anim2

    return (
        <Modal
            visible={showModal}
            transparent
        >
			<View
				style={{
					flex: 1, alignItems: 'center', justifyContent: 'center',
				}}
			>
				<View style={styles.container}>
					<Text style={{fontSize: 23, paddingHorizontal: 30, textAlign: 'center', fontWeight: 'bold'}}>
						{textTop}
					</Text>

                    <LottieView
                        style={{
                            width: 300,
                            height: 300,
                            alignSelf: 'center'
                        }}
                        autoPlay loop 
                        source={animation}
                    />
				</View>

                <TouchableOpacity 
                    onPress={onClick}
                    style={{
                        backgroundColor: '#002653', width: 350, alignItems: 'center', justifyContent: 'center', borderRadius: 25, height: 45, marginTop: 15, elevation: 4
                    }}
                >
                    <Text style={{fontSize: 22, textAlign: 'center', color: 'white'}}>
						{textButton}
					</Text>
                </TouchableOpacity>
			</View>
        </Modal>
    )
}

const styles = StyleSheet.create({
	container: {
		width: 350,
		height: 350,
		justifyContent: 'space-around',
		paddingHorizontal: 10,
		borderRadius: 12,
		backgroundColor: '#ddd',
        elevation: 4
	},
})
