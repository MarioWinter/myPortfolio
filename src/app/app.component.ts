import { Component, OnInit, Renderer2, Inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./shared/components/header/header.component";
import { DOCUMENT } from "@angular/common";

import AOS from "aos";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, HeaderComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
    title = "myportfolio";

    constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

    ngOnInit() {
        AOS.init({
            duration: 125,
            once: true,
            mirror: false,
            easing: "ease-out-cubic",
            anchorPlacement: "center-center",
        });

        // Definieren Sie den benutzerdefinierten fade-left-down Effekt
        AOS.refresh();
        let style = this.renderer.createElement("style");
        style.textContent = `
				[data-aos="custom-arrow-move"] {
                    transition-property: transform;
                    transform: translate3d(6.0rem, -6.0rem, 0);
		 			animation: arrowAnimation 1s steps(6) forwards;
                }
                [data-aos="custom-arrow-move"].aos-animate {
                    transform: translate3d(-4rem, 4rem, 0);
                }
		`;
        this.renderer.appendChild(this.document.head, style);
    }
}
