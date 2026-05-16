import my from './my.json';
import en from './en.json';

export type Locale = 'my' | 'en';

const translations = {
  my,
  en,
} as const;

const defaultLocale: Locale = 'en';

export function getTranslations(locale: Locale = defaultLocale) {
  return translations[locale] || translations.en;
}

export function t(locale: Locale = defaultLocale, key: string, defaultValue: string = ''): string {
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
  return ['en', 'my'];
}

export function getDefaultLocale(): Locale {
  return defaultLocale;
}

/** Path for a locale; default (en) has no URL prefix, my uses /my/… */
export function localePath(locale: Locale, path: string = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === getDefaultLocale()) {
    return normalized === '/' ? '/' : normalized;
  }
  return normalized === '/' ? `/${locale}/` : `/${locale}${normalized}`;
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
