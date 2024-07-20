import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class MyprojectListService {
    emailAddress = "contact@mariowinter.com";
    projectData = [
        {
            name: "Join",
            stack: "JavaScript | HTML | CSS | Git",
            img: "join.png",
            description:
                "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. Developed in a team with Git version management.",
            github: "https://github.com/MarioWinter/Join",
            link: "https://join.mariowinter.com/index.html",
        },
        {
            name: "El Pollo Loco",
            stack: "JavaScript | HTML | CSS",
            img: "el-pollo-loco.png",
            description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
            github: "https://github.com/MarioWinter/El-pollo-loco",
            link: "https://el-pollo-loco.mariowinter.com/index.html",
        },
        {
            name: "Pokedex",
            stack: "JavaScript | HTML | CSS | API",
            img: "pokedex.png",
            description: "Based on the PokeAPI a simple library that provides and catalogues pokemon information.",
            github: "https://github.com/MarioWinter/Pokedex",
            link: "https://pokedex.mariowinter.com/index.html",
        },
    ];
}
