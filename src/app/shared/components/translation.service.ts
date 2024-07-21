import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class TranslationService {
    private translations: { [key: string]: { [key: string]: string } } = {
        de: {
            WELCOME: "Willkommen",
            AUTOMATION: "Automatisierung",
            // ... weitere deutsche Übersetzungen
        },
        en: {
            WELCOME: "Welcome",
            AUTOMATION: "Automation",
            // ... weitere englische Übersetzungen
        },
        fr: {
            WELCOME: "Bienvenue",
            AUTOMATION: "Automatisation",
            // ... weitere französische Übersetzungen
        },
        // ... weitere Sprachen
    };

    constructor() {}

    getTranslation(lang: string, key: string): string {
        return this.translations[lang]?.[key] || key;
    }
}
