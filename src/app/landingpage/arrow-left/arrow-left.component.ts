import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AosDirective } from "../../directives/aos.directive";
import AOS from "aos";

@Component({
    selector: "app-arrow-left",
    standalone: true,
    imports: [CommonModule, AosDirective],
    templateUrl: "./arrow-left.component.html",
    styleUrl: "./arrow-left.component.scss",
})
export class ArrowLeftComponent implements AfterViewInit {
    ngAfterViewInit() {
        console.log("ArrowLeftComponent initialized");
        AOS.refresh();
    }
}
