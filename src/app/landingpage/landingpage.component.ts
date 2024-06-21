import { Component } from "@angular/core";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutMeComponent } from "./about-me/about-me.component";

@Component({
    selector: "app-landingpage",
    standalone: true,
    imports: [HeroSectionComponent, AboutMeComponent],
    templateUrl: "./landingpage.component.html",
    styleUrl: "./landingpage.component.scss",
})
export class LandingpageComponent {}
