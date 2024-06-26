import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AosDirective } from "../../directives/aos.directive";
import AOS from "aos";

@Component({
    selector: "app-arrow-right",
    standalone: true,
    imports: [CommonModule, AosDirective],
    templateUrl: "./arrow-right.component.html",
    styleUrl: "./arrow-right.component.scss",
})
export class ArrowRightComponent implements AfterViewInit {
    ngAfterViewInit() {
        AOS.refresh();
    }
}
