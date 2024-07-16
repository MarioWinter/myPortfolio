import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";
import { BurgerMenuComponent } from "../burger-menu/burger-menu.component";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [BurgerMenuComponent, CommonModule],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
    animations: [
        trigger("topBarAnimation", [
            state("open", style({ width: "100%", transform: "translateY(0) rotate(0)" })),
            state("close", style({ width: "50%", transform: "translateY(0.5rem) translateX(0.8rem) rotate(-45deg" })),
            transition("open => close", [
                animate(
                    "0.125s",
                    keyframes([
                        style({ width: "50%", transform: "translateY(0) translateX(0px) rotate(0)" }),
                        style({ width: "50%", transform: "translateY(0) translateX(0.8rem) rotate(0)" }),
                        style({ width: "50%", transform: "translateY(0.5rem) translateX(0.8rem) rotate(-45deg)" }),
                    ])
                ),
            ]),
            transition("close => open", [
                animate(
                    "0.125s",
                    keyframes([
                        style({ width: "50%", transform: "translateY(0.5rem) translateX(0.8rem) rotate(-45deg)" }),
                        style({ width: "50%", transform: "translateY(0) translateX(0.8rem) rotate(0)" }),
                        style({ width: "50%", transform: "translateY(0) translateX(0) rotate(0)" }),
                    ])
                ),
            ]),
        ]),
        trigger("middleBarAnimation", [
            state("open", style({ transform: "rotate(0)" })),
            state("close", style({ transform: "rotate(45deg)" })),
            transition("open => close", animate("0.125s")),
            transition("close => open", animate("0.125s")),
        ]),
        trigger("bottomBarAnimation", [
            state("open", style({ width: "100%", transform: "translateY(0) rotate(0)" })),
            state("close", style({ width: "50%", transform: "translateY(-0.5rem) translateX(-0.8rem) rotate(-45deg)" })),
            transition("open => close", [
                animate(
                    "0.125s",
                    keyframes([
                        style({ width: "50%", transform: "translateY(0) translateX(0px) rotate(0)" }),
                        style({ width: "50%", transform: "translateY(0) translateX(-0.8rem) rotate(0)" }),
                        style({ width: "50%", transform: "translateY(-0.5rem) translateX(-0.8rem) rotate(-45deg)" }),
                    ])
                ),
            ]),
            transition("close => open", [
                animate(
                    "0.125s",
                    keyframes([
                        style({ width: "50%", transform: "translateY(-0.5rem) translateX(-0.8rem) rotate(-45deg)" }),
                        style({ width: "50%", transform: "translateY(0) translateX(-0.8rem) rotate(0)" }),
                        style({ width: "50%", transform: "translateY(0) translateX(0) rotate(0)" }),
                    ])
                ),
            ]),
        ]),
    ],
})
export class HeaderComponent {
    isActive = false;

    toggleMenu() {
        this.isActive = !this.isActive;
    }

    showMenu() {
        return {
            "d-none": !this.isActive,
        };
    }
}
