import { Directive, ElementRef, Input, AfterViewInit } from "@angular/core";
import AOS from "aos";

/**
 * @class AosDirective
 * @implements {AfterViewInit}
 * @description A directive to apply Animate On Scroll (AOS) animations to elements.
 * This directive is standalone and can be used independently in Angular components.
 */
@Directive({
    selector: "[appAos]",
    standalone: true,
})
export class AosDirective implements AfterViewInit {
    /**
     * @input
     * @description The AOS animation type to be applied to the element.
     * @default "fade"
     */
    @Input() appAos: string = "fade";

    /**
     * @constructor
     * @param {ElementRef} elementRef - Reference to the host element of the directive.
     */
    constructor(private elementRef: ElementRef) {}

    /**
     * @method ngAfterViewInit
     * @description Lifecycle hook that is called after a component's view has been fully initialized.
     * It sets the AOS data attribute on the element and refreshes AOS to apply the animation.
     */
    ngAfterViewInit() {
        this.elementRef.nativeElement.setAttribute("data-aos", this.appAos);
        AOS.refresh();
    }
}
