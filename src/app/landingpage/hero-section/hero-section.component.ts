import { Component, inject } from "@angular/core";
import { TranslationService } from "../../core/services/translation.service";
import { MyprojectListService } from "../../core/services/myproject-list.service";
import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: "app-hero-section",
    standalone: true,
    imports: [TranslateModule],
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
