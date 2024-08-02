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
            github: "https://github.com/MarioWinter/Join",
            link: "https://join.mariowinter.com/index.html",
        },
        {
            name: "El Pollo Loco",
            stack: "JavaScript | HTML | CSS",
            img: "el-pollo-loco.png",
            github: "https://github.com/MarioWinter/El-pollo-loco",
            link: "https://el-pollo-loco.mariowinter.com/index.html",
        },
        {
            name: "Pokedex",
            stack: "JavaScript | HTML | CSS | API",
            img: "pokedex.png",
            github: "https://github.com/MarioWinter/Pokedex",
            link: "https://pokedex.mariowinter.com/index.html",
        },
    ];
}
