import { loadLocale } from "wuchale/load-utils";
import { sourceLocale } from "../locales/data.js";

import "../locales/main.loader.svelte.js";
import "../locales/js.loader.js";

export const ssr = false;

export const load = async ({ url }) => {
  const locale = url.searchParams.get("locale") || sourceLocale;

  await loadLocale(locale);

  return {
    locale,
  };
};
