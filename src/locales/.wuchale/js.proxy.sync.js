
            import * as _w_c_js_0_ from './main.main.fr.compiled.js'
import * as _w_c_js_1_ from './main.main.en.compiled.js'
import * as _w_c_js_2_ from './main.main.es.compiled.js'
import * as _w_c_js_3_ from './main.main.de.compiled.js'
            /** @typedef {import("wuchale/runtime").CatalogModule} CatalogMod
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {js: {fr: _w_c_js_0_,en: _w_c_js_1_,es: _w_c_js_2_,de: _w_c_js_3_}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])
            }
            export const loadIDs = ['js']
        