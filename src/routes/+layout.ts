import { loadLocale } from "wuchale/load-utils";
import { sourceLocale } from "../locales/data.js";

import "../locales/main.loader.svelte.js";
import "../locales/js.loader.js";
import { browser } from "$app/environment";

export const ssr = true;
export const prerender = true;
export const load = async ({ url }) => {
  let locale = sourceLocale;

  if (browser) {
    const urlLocale = url.searchParams.get("lang");
    if (urlLocale) {
      locale = urlLocale;
    }
  }

  await loadLocale(locale);

  return {
    locale,
  };
};
