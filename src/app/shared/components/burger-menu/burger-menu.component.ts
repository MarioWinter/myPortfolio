import { Component, inject, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyprojectListService } from "../../../core/services/myproject-list.service";
import { TranslateModule } from "@ngx-translate/core";

/**
 * @class BurgerMenuComponent
 * @description Component for displaying a burger menu with project list and translation support.
 * This component is standalone and imports CommonModule and TranslateModule.
 */
@Component({
    selector: "app-burger-menu",
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: "./burger-menu.component.html",
    styleUrls: ["./burger-menu.component.scss"],
})
export class BurgerMenuComponent {
    /**
     * @property {MyprojectListService} myprojectList
     * @description Injected service containing the list of projects.
     */
    myprojectList = inject(MyprojectListService);

    /**
     * @output menuToggled
     * @description Event emitter that fires when the menu is toggled.
     */
    @Output() menuToggled = new EventEmitter<void>();

    /**
     * @method toggleMenu
     * @description Emits an event to notify parent components that the menu has been toggled.
     */
    toggleMenu() {
        this.menuToggled.emit();
    }
}
