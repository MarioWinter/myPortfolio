import { Injectable } from "@angular/core";
/**
 * @class MyprojectListService
 * @description Service for managing project data and contact information.
 * This service is provided at the root level of the application.
 */
@Injectable({
	providedIn: "root",
})
export class MyprojectListService {
	/**
	 * @property {string} emailAddress - The contact email address for the project owner.
	 */
	emailAddress = "contact@mariowinter.com";

	/**
	 * @property {Array<Project>} projectData - An array of project objects containing details about each project.
	 * @typedef {Object} Project
	 * @property {string} name - The name of the project.
	 * @property {string} stack - A string listing the technologies used in the project.
	 * @property {string} img - The filename of the project's image.
	 * @property {string} github - The GitHub repository URL for the project.
	 * @property {string} link - The live deployment URL for the project.
	 */
	projectData = [
		{
			name: "Join",
			stack: "JavaScript | HTML | CSS | Git",
			img: "join.png",
			github: "https://github.com/MarioWinter/Join",
			link: "https://join.mariowinter.com",
		},
		{
			name: "El Pollo Loco",
			stack: "JavaScript | HTML | CSS",
			img: "el-pollo-loco.png",
			github: "https://github.com/MarioWinter/El-pollo-loco",
			link: "https://el-pollo-loco.mariowinter.com",
		},
		{
			name: "Pokedex",
			stack: "JavaScript | HTML | CSS | API",
			img: "pokedex.png",
			github: "https://github.com/MarioWinter/Pokedex",
			link: "https://pokedex.mariowinter.com",
		},
	];
}
