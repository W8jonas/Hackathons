import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Routes from './src/routes'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start wasdasdasdasdorking on your app!</Text>
      <Routes/>
      // {/* <StatusBar style="auto" />
    // </View> */}
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

