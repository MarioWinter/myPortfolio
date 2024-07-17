import { Component, inject } from "@angular/core";
import { MyprojectListService } from "../shared/components/myproject-list.service";

@Component({
    selector: "app-legal-notice",
    standalone: true,
    imports: [],
    templateUrl: "./legal-notice.component.html",
    styleUrl: "./legal-notice.component.scss",
})
export class LegalNoticeComponent {
    myprojectList = inject(MyprojectListService);
}
