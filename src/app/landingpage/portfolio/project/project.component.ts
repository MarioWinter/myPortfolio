import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-project",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./project.component.html",
    styleUrl: "./project.component.scss",
})
export class projectComponent {
    @Input() name: string = "";
    @Input() stack: string = "";
    @Input() img: string = "";
    @Input() description: string = "";
    @Input() github: string = "";
    @Input() allProjects: number = 0;
    @Input() projectNr: number = 0;
    @Input() isRight: boolean = true;

    constructor() {}
}
