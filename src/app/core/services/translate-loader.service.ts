import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";

/**
 * @interface TranslationSet
 * @description Represents a nested structure of translation key-value pairs.
 * The value can be either a string (for leaf nodes) or another TranslationSet (for nested structures).
 */
interface TranslationSet {
    [key: string]: string | TranslationSet;
}

/**
 * @class TranslateLoaderService
 * @implements {TranslateLoader}
 * @description Service for loading translation files for the ngx-translate library.
 * This service is provided at the root level of the application.
 */
@Injectable({
    providedIn: "root",
})
export class TranslateLoaderService implements TranslateLoader {
    /**
     * @private
     * @property {HttpClient} http - The HttpClient service for making HTTP requests.
     */
    private http = inject(HttpClient);

    /**
     * @method getTranslation
     * @description Fetches the translation file for the specified language.
     * @param {string} lang - The language code for which to fetch translations.
     * @returns {Observable<TranslationSet>} An Observable that emits the translation data.
     */
    getTranslation(lang: string): Observable<TranslationSet> {
        return this.http.get<TranslationSet>(`/assets/i18n/${lang}.json`);
    }
}
