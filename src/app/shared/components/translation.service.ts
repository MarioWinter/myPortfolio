import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class TranslationService {
    currentLang = "en";
    private translations: { [key: string]: { [key: string]: string } } = {
        de: {
            MAINTITLE: "Frontend Entwickler",
            SCROLL: "SCROLL NACH UNTEN",
            ABOUTME: "Über mich",
            ABOUT_1:
                "Meine Fähigkeit, Kreativität mit logischem Denken zu verbinden, ermöglicht es mir, innovative Ideen in hochwertige Webprojekte umzusetzen. Als angehender Junior-Webentwickler suche ich nach spannenden Herausforderungen",
            ABOUT_2: "Wenn Sie denken, dass ich zu Ihren Projekten passen könnte, freue ich mich auf Ihre Kontaktaufnahme!",
            TALK: "Kontakt",
            SKILLS: "Meine Skills",
            SAY_HI: "Sag Hi!",
            PORTFOLIO:
                "Entdecken Sie meine neuesten Entwicklungsprojekte. Probieren Sie die Projekte aus und erkunden Sie den Code, um meine Frontend-Fähigkeiten in Aktion zu sehen.",
            FOOTER_SUB: "Möchten Sie ein neues Projekt besprechen?",
            FOOTER_TXT: "Sagen Sie Hallo! Lassen Sie uns Ihre Ideen besprechen und sie umsetzen",
            NAME: "Ihr Name",
            MAIL: "Ihre E-Mail",
            MESSAGE: "Ihre Nachricht",
            ERROR_NAME: "Ihr Name ist erforderlich",
            ERROR_MAIL: "Ihre E-Mail ist erforderlich",
            ERROR_MESSAGE: "Ihre Nachricht ist leer",
            PRIVACY_1: "Ich habe die",
            PRIVACY_2: "Datenschutzerklärung",
            PRIVACY_3: "gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.",
            ERROR_PRIVACY: "Bitte akzeptieren Sie die Datenschutzerklärung",
            SEND: "Nachricht senden",
            IMPRINT: "Impressum",
        },
        en: {
            MAINTITLE: "Frontend Developer",
            SCROLL: "SCROLL DOWN",
            ABOUTME: "About me",
            ABOUT_1:
                "My ability to combine creativity with logical thinking enables me to turn innovative ideas into high-quality web projects. As an aspiring junior web developer, I am looking for exciting challenges.",
            ABOUT_2: "If you think I could be a good fit for your projects, I look forward to hearing from you!",
            TALK: "Let's talk",
            SKILLS: "My skills",
            SAY_HI: "Say Hi!",
            PORTFOLIO: "Discover my latest development projects. Try out the projects and explore the code to see my frontend skills in action.",
            FOOTER_SUB: "Want to discuss a new project?",
            FOOTER_TXT: "Say hello! let's discuss your ideas and make it happen",
            NAME: "Your name",
            MAIL: "Your email",
            MESSAGE: "Your message",
            ERROR_NAME: "Your name is required",
            ERROR_MAIL: "Your email is required",
            ERROR_MESSAGE: "Your message is empty",
            PRIVACY_1: "I've read the",
            PRIVACY_2: "privacy policy",
            PRIVACY_3: "and agree to the processing of my data as outlined.",
            ERROR_PRIVACY: "Please accept the privacy policy",
            SEND: "Send message",
            IMPRINT: "Imprint",
        },
    };

    constructor() {}

    getTranslation(lang: string, key: string): string {
        return this.translations[lang]?.[key] || key;
    }

    setLanguage(lang: string) {
        this.currentLang = lang;
    }
}
