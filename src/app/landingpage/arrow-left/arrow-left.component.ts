import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AOSDirective } from "../../shared/directives/aos.directive";

@Component({
	selector: "app-arrow-left",
	standalone: true,
	imports: [CommonModule, AOSDirective],
	templateUrl: "./arrow-left.component.html",
	styleUrls: ["./arrow-left.component.scss"],
})
export class ArrowLeftComponent {}
