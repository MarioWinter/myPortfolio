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

	public ngAfterViewInit() {
		window.onload = () => {
			this.initializeAOS();
		};
	}

	public initializeAOS() {
		AOS.init({
			offset: 0,
			duration: 500,
			delay: 200,
			once: true,
			mirror: false,
			anchorPlacement: "center-center",
			easing: "ease-in-out",
		});
		AOS.refresh();
	}
}
