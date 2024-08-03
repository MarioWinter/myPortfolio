import { Injectable } from "@angular/core";

/**
 * @interface Skill
 * @description Represents a skill with a path to its icon and its name.
 */
interface Skill {
    /** The path to the skill's icon */
    path: string;
    /** The name of the skill */
    name: string;
}

/**
 * @class SkillsService
 * @description Service for managing a list of skills.
 * This service is provided at the root level of the application.
 */
@Injectable({
    providedIn: "root",
})
export class SkillsService {
    /**
     * @constructor
     * @description Initializes a new instance of the SkillsService class.
     */
    constructor() {}

    /**
     * @property {Skill[]} mySkills - An array of skill objects containing details about each skill.
     */
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
