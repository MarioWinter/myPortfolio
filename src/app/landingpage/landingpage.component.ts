import { Component } from "@angular/core";
import { HeroSectionComponent } from "./hero-section/hero-section.component";

@Component({
    selector: "app-landingpage",
    standalone: true,
    imports: [HeroSectionComponent],
    templateUrl: "./landingpage.component.html",
    styleUrl: "./landingpage.component.scss",
})
export class LandingpageComponent {}
