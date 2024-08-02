import { Component, inject } from "@angular/core";
import { MyprojectListService } from "../core/services/myproject-list.service";
import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: "app-legal-notice",
    standalone: true,
    imports: [TranslateModule],
    templateUrl: "./legal-notice.component.html",
    styleUrl: "./legal-notice.component.scss",
})
export class LegalNoticeComponent {
    myprojectList = inject(MyprojectListService);
}
