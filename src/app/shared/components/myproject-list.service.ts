import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class MyprojectListService {
    stackString: string = "";
    projectData = [
        {
            name: "Portfolio Website",
            stack: ["Angular", "TypeScript", "SCSS", "HTML"],
            description: "Eine persönliche Portfolio-Website zur Präsentation meiner Projekte und Fähigkeiten.",
            github: "https://github.com/username/portfolio-website",
        },
        {
            name: "Task Manager App",
            stack: ["React", "JavaScript", "CSS", "Node.js", "MongoDB"],
            description: "Eine vollständige Task-Management-Anwendung mit Benutzerauthentifizierung und Datenbankintegration.",
            github: "https://github.com/username/task-manager-app",
        },
        {
            name: "E-Commerce Platform",
            stack: ["Vue.js", "Vuex", "Firebase", "Stripe API"],
            description: "Eine E-Commerce-Plattform mit Produktkatalog, Warenkorb und sicherer Zahlungsabwicklung.",
            github: "https://github.com/username/ecommerce-platform",
        },
        {
            name: "Weather Forecast App",
            stack: ["Angular", "RxJS", "OpenWeatherMap API", "Chart.js"],
            description: "Eine Wetter-App, die aktuelle Wetterdaten und Vorhersagen für verschiedene Standorte anzeigt.",
            github: "https://github.com/username/weather-forecast-app",
        },
    ];

    constructor() {
        this.prepareProjects();
    }

    prepareProjects(): void {
        this.projectData.forEach((project) => {
            this.stackString = project.stack.join(" | ");
            console.log(this.stackString);
        });
    }
}
