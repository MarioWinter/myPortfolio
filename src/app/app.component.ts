import { Component, AfterViewInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import AOS from "aos";
import "aos/dist/aos.css";

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
		console.log("Initializing AOS");
		AOS.init({});
		AOS.refresh();
		console.log("AOS initialized");
	}
}
