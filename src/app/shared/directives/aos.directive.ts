import { Directive, ElementRef, Input, AfterViewInit } from "@angular/core";
import AOS from "aos";

@Directive({
    selector: "[appAos]",
    standalone: true,
})
export class AosDirective implements AfterViewInit {
    @Input() appAos: string = "fade";

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit() {
        this.elementRef.nativeElement.setAttribute("data-aos", this.appAos);
        AOS.refresh();
    }
}
