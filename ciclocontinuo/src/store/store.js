import { persistStore, persistReducer } from 'redux-persist'
import {createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { KEYS } from "../configs/constants"

import userReducer from '../reducers/user'

const reducers = combineReducers({
    userState: userReducer,
})

const persistConfig = {
    key: 'key_de_registro',  // Essa é a key que não consigo alterar dinamicamente
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
export let store = createStore(persistedReducer, applyMiddleware(thunk))
export let persistor = persistStore(store)
