import { Component, Input } from "@angular/core";

@Component({
    selector: "app-project",
    standalone: true,
    imports: [],
    templateUrl: "./project.component.html",
    styleUrl: "./project.component.scss",
})
export class projectComponent {
    @Input() name: string = "";
    @Input() stack: string = "";
    @Input() description: string = "";
    @Input() github: string = "";
    @Input() allProjects: number = 0;
    @Input() projectNr: number = 0;
}
