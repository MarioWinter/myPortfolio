import { Component, Input, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslationService } from "../../../shared/components/translation.service";

@Component({
    selector: "app-project",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./project.component.html",
    styleUrl: "./project.component.scss",
})
export class projectComponent {
    translationService = inject(TranslationService);
    @Input() name: string = "";
    @Input() stack: string = "";
    @Input() img: string = "";
    @Input() description: string = "";
    @Input() description_de: string = "";
    @Input() github: string = "";
    @Input() link: string = "";
    @Input() allProjects: number = 0;
    @Input() projectNr: number = 0;
    @Input() isRight: boolean = true;

    constructor() {}
}
