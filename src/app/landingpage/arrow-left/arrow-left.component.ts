import { Component, AfterViewInit, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AosDirective } from "./../../shared/directives/aos.directive";
import AOS from "aos";

/**
 * @class ArrowLeftComponent
 * @implements {AfterViewInit}
 * @description Component for displaying a left arrow with AOS animations.
 * This component is standalone and imports the CommonModule and AosDirective.
 */
@Component({
	selector: "app-arrow-left",
	standalone: true,
	imports: [CommonModule, AosDirective],
	templateUrl: "./arrow-left.component.html",
	styleUrls: ["./arrow-left.component.scss"],
})
export class ArrowLeftComponent implements AfterViewInit {
	@Input() id: string = "";

	/**
	 * @method ngAfterViewInit
	 * @description Lifecycle hook that is called after a component's view has been fully initialized.
	 * It refreshes AOS to apply animations.
	 */
	ngAfterViewInit() {
		AOS.refresh();
	}
}
