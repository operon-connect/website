import my from './my.json';
import en from './en.json';

export type Locale = 'my' | 'en';

const translations = {
  my,
  en,
} as const;

export function getTranslations(locale: Locale = 'my') {
  return translations[locale] || translations.my;
}

export function t(locale: Locale = 'my', key: string, defaultValue: string = ''): string {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      return defaultValue || key;
    }
  }

  return value;
}

export function getAllLocales(): Locale[] {
  return ['my', 'en'];
}

export function getDefaultLocale(): Locale {
  return 'my';
}

export function isValidLocale(locale: string): locale is Locale {
  return locale === 'my' || locale === 'en';
}

export function getLocaleFromUrl(pathname: string): Locale {
  const match = pathname.match(/^\/([a-z]{2})(?:\/|$)/);
  if (match && isValidLocale(match[1])) {
    return match[1];
  }
  return getDefaultLocale();
}

export function getLocaleMetadata(locale: Locale) {
  const translations = getTranslations(locale);
  return {
    lang: translations.lang,
    dir: translations.dir,
    locale: translations.locale,
  };
}
