import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { projectComponent } from "./project/project.component";
import { MyprojectListService } from "../../core/services/myproject-list.service";
import { TranslationService } from "../../core/services/translation.service";

@Component({
    selector: "app-portfolio",
    standalone: true,
    imports: [projectComponent, CommonModule],
    templateUrl: "./portfolio.component.html",
    styleUrl: "./portfolio.component.scss",
})
export class PortfolioComponent {
    myprojectList = inject(MyprojectListService);
    translationService = inject(TranslationService);

    translate(key: string): string {
        return this.translationService.getTranslation(this.translationService.currentLang, key);
    }
}
