import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ArrowLeftComponent } from "./arrow-left/arrow-left.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";

@Component({
    selector: "app-landingpage",
    standalone: true,
    imports: [CommonModule, HeroSectionComponent, AboutMeComponent, ArrowLeftComponent, MySkillsComponent],
    templateUrl: "./landingpage.component.html",
    styleUrl: "./landingpage.component.scss",
})
export class LandingpageComponent {}
