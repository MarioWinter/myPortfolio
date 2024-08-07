import { Component, AfterViewInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

import AOS from "aos";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements AfterViewInit {
	title = "myportfolio";

	ngAfterViewInit() {
		setTimeout(() => {
			AOS.init({
				duration: 500,
				once: true,
				mirror: false,
				easing: "ease-out-cubic",
				anchorPlacement: "top-bottom",
			});
			AOS.refresh();
		}, 100);
	}
}
