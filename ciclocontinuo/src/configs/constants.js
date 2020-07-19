const num = 0 // 17 num da conta

import TERMS_OF_PRIVACY from "./termsOfPrivacy"
import TERMS_OF_USE from "./termsOfUse"

// Primeiro dígito: Nova feature, função, ou mudança grande
// Segundo dígito: Mudança de estrutura, funções interas, backend, mudanças de médio porte
// Terceiro dígito: Mudançãs sutís, correções de issues e bugs, mudanças de pequeno porte
const APPCONFIG = {
    version: '1-0-3',
    model: 'production'
}

const KEYS = {
    APP_STORAGE_KEY: `@LearnI_STORAGE_${APPCONFIG.model}_${num}`,
    APP_STORAGE_KEY_REDUX_PERSIST: `@LearnI_STORAGE_R_${APPCONFIG.model}_${num}`
}

const APP = {
    ADMOB_BANNER_UNIT_ID: 'ca-app-pub-1345750407724187/9400986682',
    ADMOB_INTERSTITIAL_UNIT_ID: 'ca-app-pub-1345750407724187/6846185850'
}

const termsOfUse = {
    termsOfUse: TERMS_OF_USE,
    termsOfPrivacy: TERMS_OF_PRIVACY
}


export {
    KEYS,
    APPCONFIG,
    APP,
    termsOfUse,
}