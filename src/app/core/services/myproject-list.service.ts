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
            description_de:
                "Task Manager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu. Entwickelt in einem Team mit Git-Versionsverwaltung.",
            github: "https://github.com/MarioWinter/Join",
            link: "https://join.mariowinter.com/index.html",
        },
        {
            name: "El Pollo Loco",
            stack: "JavaScript | HTML | CSS",
            img: "el-pollo-loco.png",
            description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
            description_de:
                "Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen El Pollo Loco zu kämpfen.",
            github: "https://github.com/MarioWinter/El-pollo-loco",
            link: "https://el-pollo-loco.mariowinter.com/index.html",
        },
        {
            name: "Pokedex",
            stack: "JavaScript | HTML | CSS | API",
            img: "pokedex.png",
            description: "Based on the PokeAPI a simple library that provides and catalogues pokemon information.",
            description_de: "Basierend auf der PokeAPI eine einfache Bibliothek, die Pokemon-Informationen bereitstellt und katalogisiert.",
            github: "https://github.com/MarioWinter/Pokedex",
            link: "https://pokedex.mariowinter.com/index.html",
        },
    ];
}
