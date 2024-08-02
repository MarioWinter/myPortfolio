import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";

interface TranslationSet {
    [key: string]: string | TranslationSet;
}

@Injectable({
    providedIn: "root",
})
export class TranslateLoaderService implements TranslateLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string): Observable<TranslationSet> {
        return this.http.get<TranslationSet>(`/assets/i18n/${lang}.json`);
    }
}
