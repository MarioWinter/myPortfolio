import { Component, inject } from "@angular/core";
import { ContactformComponent } from "../contactform/contactform.component";
import { MyprojectListService } from "../../../shared/components/myproject-list.service";

@Component({
    selector: "app-footer",
    standalone: true,
    imports: [ContactformComponent],
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.scss",
})
export class FooterComponent {
    myprojectList = inject(MyprojectListService);
}
