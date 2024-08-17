import { Directive, ElementRef, AfterViewInit, Input } from "@angular/core";
import AOS from "aos";

@Directive({
	selector: "[appAOS]",
	standalone: true,
})
export class AOSDirective implements AfterViewInit {
	@Input("appAOS") aosType: string = "";

	constructor(private el: ElementRef) {}

	public ngAfterViewInit() {
		this.el.nativeElement.setAttribute("data-aos", this.aosType);

		this.initializeAOS();
		setTimeout(() => {
			AOS.refresh();
		}, 100);
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
	}
}
