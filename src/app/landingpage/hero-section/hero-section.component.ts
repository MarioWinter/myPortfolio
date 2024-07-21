import { Component, inject } from "@angular/core";
import { TranslationService } from "../../shared/components/translation.service";
import { MyprojectListService } from "../../shared/components/myproject-list.service";

@Component({
    selector: "app-hero-section",
    standalone: true,
    imports: [],
    templateUrl: "./hero-section.component.html",
    styleUrl: "./hero-section.component.scss",
})
export class HeroSectionComponent {
    myprojectList = inject(MyprojectListService);
    translationService = inject(TranslationService);

    translate(key: string): string {
        return this.translationService.getTranslation(this.translationService.currentLang, key);
    }
}
