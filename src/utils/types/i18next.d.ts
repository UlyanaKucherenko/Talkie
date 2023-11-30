import { uaTranslation } from '../../libs/languages/ua';
import { enTranslation } from '../../libs/languages/en';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof uaTranslation;
      ua: typeof enTranslation;
    };
  }
}
