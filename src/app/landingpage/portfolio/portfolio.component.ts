import { Component } from "@angular/core";
import { ProjektComponent } from "./projekt/projekt.component";

@Component({
    selector: "app-portfolio",
    standalone: true,
    imports: [ProjektComponent],
    templateUrl: "./portfolio.component.html",
    styleUrl: "./portfolio.component.scss",
})
export class PortfolioComponent {}
