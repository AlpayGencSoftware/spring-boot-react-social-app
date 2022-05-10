import i18n from "i18next";
import {initReactI18next} from 'react-i18next';


i18n.use(initReactI18next).init({
    resources:{
        de:{
            translations:{
                'Sign Up' :'Jetzt registrieren',
                'Password mismatch':'Die Passwörter stimmen nicht überein',
                 Username:'Benutzername',
                'Display Name':'Anzeigename',
                Password:'Passwort',
                'Password Repeat':'Passwort wiederholen',
                Login:'Anmeldung'  
            }
        },
        en:{
            translations:{
                  'Sign Up' :'Sign Up',
                  'Password mismatch':'Password mismatch', 
                  Username:'Username',
                  'Display Name':'Display Name',
                  Password:'Password',
                  'Password Repeat':'Password Repeat',
                  Login:'Login'  
            }
        } 
    },
    fallbackLng: 'de',
    ns:['translations'],
    defaultNS:'translations',
    keySeparator:false,
    interpolation:{
        escapeValue:false,
        formatSeparator:','
    },
    react:{
        wait:true
    }
})

export default i18n;