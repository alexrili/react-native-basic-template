import{getLocales} from 'react-native-localize';
import I18n from 'i18n-js';
import en from './en-US';
import pt from './pt-BR';

const normalizeTranslate = {
    en_US: 'en_US',
    pt_BR: 'pt_BR',
    en: 'en_US',
    pt_US: 'pt_BR',
};


I18n.translations = {
    en_US: en,
    pt_BR: pt,
};

const setLanguageToI18n = () => {
    const [language] = getLocales();
    const translateNormalize = normalizeTranslate[language.languageCode];
    const iHaveThisLanguage = I18n.translations.hasOwnProperty(
        translateNormalize,
    );
    iHaveThisLanguage
        ? (I18n.locale = translateNormalize)
        : (I18n.defaultLocale = 'en_US');
};

setLanguageToI18n();

export const translate = key => {
    return I18n.t(key);
};
