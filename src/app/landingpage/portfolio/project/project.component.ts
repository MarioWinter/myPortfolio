import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: "app-project",
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: "./project.component.html",
    styleUrl: "./project.component.scss",
})
export class projectComponent implements OnInit {
    @Input() name: string = "";
    @Input() stack: string = "";
    @Input() img: string = "";
    @Input() github: string = "";
    @Input() link: string = "";
    @Input() allProjects: number = 0;
    @Input() projectNr: number = 0;
    @Input() isRight: boolean = true;

    projectDesciption: string = "";

    constructor() {}

    ngOnInit(): void {
        this.projectDesciption = `PORTFOLIO.PROJECT${this.projectNr}.DESCRIPTION`;
    }
}
