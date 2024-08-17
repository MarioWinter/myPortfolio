import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { AOSDirective } from "../../shared/directives/aos.directive";

@Component({
	selector: "app-about-me",
	standalone: true,
	imports: [TranslateModule, AOSDirective],
	templateUrl: "./about-me.component.html",
	styleUrl: "./about-me.component.scss",
})
export class AboutMeComponent {}
