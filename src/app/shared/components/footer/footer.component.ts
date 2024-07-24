import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ContactformComponent } from "../contactform/contactform.component";
import { TranslationService } from "../../../shared/components/translation.service";
import { MyprojectListService } from "../../../shared/components/myproject-list.service";

@Component({
    selector: "app-footer",
    standalone: true,
    imports: [ContactformComponent, CommonModule],
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.scss",
})
export class FooterComponent {
    myprojectList = inject(MyprojectListService);
    translationService = inject(TranslationService);

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    translate(key: string): string {
        return this.translationService.getTranslation(this.translationService.currentLang, key);
    }
}
