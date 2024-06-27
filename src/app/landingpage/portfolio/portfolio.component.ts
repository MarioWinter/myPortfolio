import { Component } from "@angular/core";
import { projectComponent } from "./project/project.component";

@Component({
    selector: "app-portfolio",
    standalone: true,
    imports: [projectComponent],
    templateUrl: "./portfolio.component.html",
    styleUrl: "./portfolio.component.scss",
})
export class PortfolioComponent {}
