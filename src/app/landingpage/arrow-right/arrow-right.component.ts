import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AosDirective } from "./../../shared/directives/aos.directive";
import AOS from "aos";

/**
 * @class ArrowRightComponent
 * @implements {AfterViewInit}
 * @description Component for displaying a right arrow with AOS animations.
 * This component is standalone and imports the CommonModule and AosDirective.
 */
@Component({
    selector: "app-arrow-right",
    standalone: true,
    imports: [CommonModule, AosDirective],
    templateUrl: "./arrow-right.component.html",
    styleUrls: ["./arrow-right.component.scss"],
})
export class ArrowRightComponent implements AfterViewInit {
    /**
     * @method ngAfterViewInit
     * @description Lifecycle hook that is called after a component's view has been fully initialized.
     * It refreshes AOS to apply animations.
     */
    ngAfterViewInit() {
        AOS.refresh();
    }
}
