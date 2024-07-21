import { Component, inject, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyprojectListService } from "../../../shared/components/myproject-list.service";
import { TranslationService } from "../../../shared/components/translation.service";

@Component({
    selector: "app-burger-menu",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./burger-menu.component.html",
    styleUrl: "./burger-menu.component.scss",
})
export class BurgerMenuComponent {
    myprojectList = inject(MyprojectListService);
    translationService = inject(TranslationService);

    @Output() menuToggled = new EventEmitter<void>();

    toggleMenu() {
        this.menuToggled.emit();
    }
    translate(key: string): string {
        return this.translationService.getTranslation(this.translationService.currentLang, key);
    }
}
