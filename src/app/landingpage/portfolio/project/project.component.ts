import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { AOSDirective } from "../../../shared/directives/aos.directive";

@Component({
	selector: "app-project",
	standalone: true,
	imports: [CommonModule, TranslateModule, AOSDirective],
	templateUrl: "./project.component.html",
	styleUrl: "./project.component.scss",
})
export class projectComponent implements OnInit {
	@Input() name: string = "";
	@Input() stack: string = "";
	@Input() img: string = "";
	@Input() github: string = "";
	@Input() link: string = "";
	@Input() allProjects: number = 0;
	@Input() projectNr: number = 0;
	@Input() isRight: boolean = true;

	projectDesciption: string = "";

	/**
	 * @method ngOnInit
	 * @description Lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
	 * It sets the project description based on the project number, using an internationalization key format.
	 * @returns {void}
	 */
	ngOnInit(): void {
		this.projectDesciption = `PORTFOLIO.PROJECT${this.projectNr}.DESCRIPTION`;
	}

	/**
	 * @method setArrowSpinDirection
	 * @description Determines the CSS animation class for arrow spin direction based on the given boolean value.
	 * @param {boolean} isRight - Indicates whether the arrow should spin to the right.
	 * @returns {string} The CSS class name for the arrow spin animation.
	 * Returns "spin-arrow-right" if `isRight` is true, otherwise "spin-arrow-left".
	 */
	setArrowSpinDirection(isRight: boolean): string {
		return isRight ? "spin-arrow-right" : "spin-arrow-left";
	}

	/**
	 * @method setFadeInDescription
	 * @description Determines the CSS animation class for fading in the description based on the given boolean value.
	 * @param {boolean} isRight - Indicates whether the description should fade in from the right.
	 * @returns {string} The CSS class name for the fade-in animation.
	 * Returns "fade-left" if `isRight` is true, otherwise "fade-right".
	 */
	setFadeInDescription(isRight: boolean): string {
		return isRight ? "fade-left" : "fade-right";
	}
}
