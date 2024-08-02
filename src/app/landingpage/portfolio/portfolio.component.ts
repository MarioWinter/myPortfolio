import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { projectComponent } from "./project/project.component";
import { MyprojectListService } from "../../core/services/myproject-list.service";
import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: "app-portfolio",
    standalone: true,
    imports: [projectComponent, CommonModule, TranslateModule],
    templateUrl: "./portfolio.component.html",
    styleUrl: "./portfolio.component.scss",
})
export class PortfolioComponent {
    myprojectList = inject(MyprojectListService);
}
