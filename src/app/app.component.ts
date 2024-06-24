import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./shared/components/header/header.component";
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
    ngOnInit() {
        AOS.init({
            duration: 125,
            once: true,
            mirror: false,
            easing: "ease-out-cubic",
            anchorPlacement: "top-bottom",
        });

        // Definieren Sie den benutzerdefinierten fade-left-down Effekt
        AOS.refresh();
        document.head.insertAdjacentHTML(
            "beforeend",
            `
            <style>
                [data-aos="custom-arrow-move"] {
                    transition-property: transform;
                    transform: translate3d(5.0rem, -5.0rem, 0);
					animation: arrowAnimation 1s steps(6) forwards;
                }
                [data-aos="custom-arrow-move"].aos-animate {
                    transform: translate3d(-2rem, 2rem, 0);
                }
            </style>
            `
        );
    }
}
