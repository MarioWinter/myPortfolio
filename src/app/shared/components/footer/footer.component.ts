import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ContactformComponent } from "../contactform/contactform.component";
import { MyprojectListService } from "../../../core/services/myproject-list.service";
import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: "app-footer",
    standalone: true,
    imports: [ContactformComponent, CommonModule, TranslateModule],
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.scss",
})
export class FooterComponent {
    myprojectList = inject(MyprojectListService);

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
}
