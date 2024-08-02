import { Component, inject } from "@angular/core";
import { MyprojectListService } from "../core/services/myproject-list.service";
import { TranslationService } from "../core/services/translation.service";

@Component({
    selector: "app-legal-notice",
    standalone: true,
    imports: [],
    templateUrl: "./legal-notice.component.html",
    styleUrl: "./legal-notice.component.scss",
})
export class LegalNoticeComponent {
    myprojectList = inject(MyprojectListService);
    translationService = inject(TranslationService);

    translate(key: string): string {
        return this.translationService.getTranslation(this.translationService.currentLang, key);
    }
}
