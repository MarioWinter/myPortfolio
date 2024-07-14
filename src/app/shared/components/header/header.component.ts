import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BurgerMenuComponent } from "../burger-menu/burger-menu.component";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [BurgerMenuComponent, CommonModule],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
})
export class HeaderComponent {
    isMenuOpen = true;

    popMenu() {
        //this.isMenuOpen = !this.isMenuOpen ? true : false;
        console.log("click geht:" + this.isMenuOpen);
    }

    showMenu() {
        return {
            "d-none": !this.isMenuOpen,
        };
    }
}
