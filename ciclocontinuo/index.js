
import {AppRegistry} from 'react-native'
import App from './src/routes/routes'
import {name as appName} from './app.json'
import React from 'react'

import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import {persistor} from "./src/store/store"
import {store} from "./src/store/store"

console.log('%c store.getState()','color: red', store.getState())

appRootComponent = () => (
    <Provider store={store}> 
        <PersistGate loading={null} persistor={persistor}>
            <App/> 
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => appRootComponent);
