import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SkillsService } from "../../core/services/skills.service";
import { TranslationService } from "../../core/services/translation.service";

@Component({
    selector: "app-my-skills",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./my-skills.component.html",
    styleUrl: "./my-skills.component.scss",
})
export class MySkillsComponent {
    skillList = inject(SkillsService);
    translationService = inject(TranslationService);

    translate(key: string): string {
        return this.translationService.getTranslation(this.translationService.currentLang, key);
    }
}
