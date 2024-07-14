import { Component, inject } from "@angular/core";
import { MyprojectListService } from "../../../shared/components/myproject-list.service";

@Component({
    selector: "app-burger-menu",
    standalone: true,
    imports: [],
    templateUrl: "./burger-menu.component.html",
    styleUrl: "./burger-menu.component.scss",
})
export class BurgerMenuComponent {
    myprojectList = inject(MyprojectListService);
}
