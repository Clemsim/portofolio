import { loadLocale } from "wuchale/load-utils";
import { sourceLocale } from "../locales/data.js";
import { browser } from "$app/environment";

import "../locales/main.loader.svelte.js";
import "../locales/js.loader.js";

export const ssr = true;
export const prerender = true;
export const load = async ({ url }) => {
  let locale = sourceLocale;

  if (browser) {
    const param = url.searchParams.get("locale");
    if (param) locale = param;
  }

  await loadLocale(locale);

  return {
    locale,
  };
};
