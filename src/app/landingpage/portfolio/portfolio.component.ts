import { Component, inject } from "@angular/core";
import { projectComponent } from "./project/project.component";
import { MyprojectListService } from "../../shared/components/myproject-list.service";

@Component({
    selector: "app-portfolio",
    standalone: true,
    imports: [projectComponent],
    templateUrl: "./portfolio.component.html",
    styleUrl: "./portfolio.component.scss",
})
export class PortfolioComponent {
    projectList = inject(MyprojectListService);
}
