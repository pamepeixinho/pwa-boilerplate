/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import ptLocaleData from 'react-intl/locale-data/pt';

import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line
import ptTranslationMessages from './translations/pt.json';

export const appLocales = [
  'pt',
];

addLocaleData(ptLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    let message = messages[key];
    if (!message && locale !== DEFAULT_LOCALE) {
      message = defaultFormattedMessages[key];
    }
    return Object.assign(formattedMessages, { [key]: message });
  }, {});
};

export const translationMessages = {
  pt: formatTranslationMessages('pt', ptTranslationMessages),
};
