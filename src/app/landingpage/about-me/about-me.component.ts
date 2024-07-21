import { Component, inject } from "@angular/core";
import { TranslationService } from "../../shared/components/translation.service";

@Component({
    selector: "app-about-me",
    standalone: true,
    imports: [],
    templateUrl: "./about-me.component.html",
    styleUrl: "./about-me.component.scss",
})
export class AboutMeComponent {
    translationService = inject(TranslationService);

    translate(key: string): string {
        return this.translationService.getTranslation(this.translationService.currentLang, key);
    }
}
