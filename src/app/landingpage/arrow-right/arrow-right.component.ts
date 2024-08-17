import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AOSDirective } from "../../shared/directives/aos.directive";

@Component({
	selector: "app-arrow-right",
	standalone: true,
	imports: [CommonModule, AOSDirective],
	templateUrl: "./arrow-right.component.html",
	styleUrls: ["./arrow-right.component.scss"],
})
export class ArrowRightComponent {}
