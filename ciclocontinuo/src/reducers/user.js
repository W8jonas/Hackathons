
const INITIAL_STATE = {
    configs: {
        language: " ",
        theme: " ",
    },
    
    account: {
        name: " ",
        nickName: " ",
        uid: " ",
        email: " ",
        tokenAuth: " ",
    },
    
    app:{
        tutorialComplete: false,
        userIsPremiun: false,
        appValueShow: false,
        isLogged: false,
        weKnowYou: false,
    },

}


export default function userReducer(state = INITIAL_STATE, {type, payload}){
    switch (type) {
        case 'RESET_USER':
            return INITIAL_STATE

        case 'APP_WE_KNOW_YOU':
            console.log('dispatch APP_WE_KNOW_YOU')
            return {...state, app: {...state.app, weKnowYou: payload}}

        case 'APP_VALUE_SHOW':
            console.log('dispatch APP_VALUE_SHOW')
            return {...state, app: {...state.app, appValueShow: payload}}

        case 'IS_LOGGED':
            console.log('dispatch IS_LOGGED')
            return {
                ...state, 
                app: {
                    ...state.app, 
                    isLogged: true
                },
                account: {
                    ...state.account,
                    tokenAuth: payload.token
                }
            }

        case 'LOG_OFF':
            console.log('dispatch LOG_OFF')
            return {
                ...state, 
                app: {
                    ...state.app, 
                    isLogged: false
                },
                account: {
                    ...state.account,
                    tokenAuth: null
                }
            }

        default:
            return state
    }
}
