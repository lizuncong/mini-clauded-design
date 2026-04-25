import { defineRouting } from 'next-intl/routing';

// 详见文档：https://next-intl.dev/docs/routing/configuration
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'as-needed',

});
