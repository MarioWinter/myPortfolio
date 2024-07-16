import { Component, inject, Input, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyprojectListService } from "../../../shared/components/myproject-list.service";

@Component({
    selector: "app-burger-menu",
    standalone: true,
    imports: [CommonModule],
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
