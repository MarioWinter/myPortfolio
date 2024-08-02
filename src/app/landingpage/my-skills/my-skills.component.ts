import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SkillsService } from "../../core/services/skills.service";
import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: "app-my-skills",
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: "./my-skills.component.html",
    styleUrl: "./my-skills.component.scss",
})
export class MySkillsComponent {
    skillList = inject(SkillsService);
}
