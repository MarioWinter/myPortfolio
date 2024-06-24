import { Injectable } from "@angular/core";

interface Skill {
    path: string;
    name: string;
}

@Injectable({
    providedIn: "root",
})
export class SkillsService {
    constructor() {}

    mySkills: Skill[] = [
        { path: "angular.svg", name: "Angular" },
        { path: "typescript.svg", name: "TypeScript" },
        { path: "javascript.svg", name: "JavaScript" },
        { path: "html.svg", name: "HTML" },
        { path: "css.svg", name: "CSS" },
        { path: "firebase.svg", name: "Firebase" },
        { path: "git.svg", name: "Git" },
        { path: "scrum.svg", name: "Scrum" },
        { path: "api.svg", name: "Rest-Api" },
        { path: "material-design.svg", name: "Material Design" },
    ];
}
