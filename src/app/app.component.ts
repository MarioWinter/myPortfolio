import { Component, OnInit, Renderer2, Inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { DOCUMENT } from "@angular/common";

import AOS from "aos";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
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
        AOS.refresh();
        let style = this.renderer.createElement("style");
        style.textContent = `
				[data-aos="arrow-move-left"] {
                    transition-property: transform;
                    transform: translate3d(6.0rem, -6.0rem, 0);
                }
                [data-aos="arrow-move-left"].aos-animate {
                    transform: translate3d(-4rem, 4rem, 0);
                }

				[data-aos="arrow-move-right"] {
                    transition-property: transform;
                    transform: translate3d(6.0rem, -6.0rem, 0);
                }
                [data-aos="arrow-move-right"].aos-animate {
                    transform: translate3d(14rem, 0rem, 0);
                }

		`;
        this.renderer.appendChild(this.document.head, style);
    }
}
