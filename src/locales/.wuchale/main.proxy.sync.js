
            import * as _w_c_main_0_ from './main.main.fr.compiled.js'
import * as _w_c_main_1_ from './main.main.en.compiled.js'
import * as _w_c_main_2_ from './main.main.es.compiled.js'
import * as _w_c_main_3_ from './main.main.de.compiled.js'
            /** @typedef {import("wuchale/runtime").CatalogModule} CatalogMod
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {main: {fr: _w_c_main_0_,en: _w_c_main_1_,es: _w_c_main_2_,de: _w_c_main_3_}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])
            }
            export const loadIDs = ['main']
        