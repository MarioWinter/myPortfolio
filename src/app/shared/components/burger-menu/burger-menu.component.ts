import { Component, inject, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyprojectListService } from "../../../core/services/myproject-list.service";
import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: "app-burger-menu",
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: "./burger-menu.component.html",
    styleUrl: "./burger-menu.component.scss",
})
export class BurgerMenuComponent {
    myprojectList = inject(MyprojectListService);

    @Output() menuToggled = new EventEmitter<void>();

    toggleMenu() {
        this.menuToggled.emit();
    }
}
