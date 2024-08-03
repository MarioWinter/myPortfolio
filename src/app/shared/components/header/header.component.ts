import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";
import { BurgerMenuComponent } from "../burger-menu/burger-menu.component";
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [BurgerMenuComponent, CommonModule, TranslateModule],
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
export class HeaderComponent implements OnInit {
    translate = inject(TranslateService);
    isActive = false;
    toggleMenu() {
        this.isActive = !this.isActive;
        this.toggleBodyScroll();
    }

    ngOnInit() {
        this.loadCurrentLangFromLocalStorage();
    }

    private toggleBodyScroll() {
        if (this.isActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }

    showMenu(): { [key: string]: boolean } {
        return {
            "d-none": !this.isActive,
        };
    }

    fixPosition(): { [key: string]: string } {
        return {
            "right.rem": this.isActive ? "1.1" : "0",
        };
    }

    useLanguage(language: string): void {
        this.translate.use(language).subscribe(() => {
            this.saveCurrentLangInLocalStorage();
        });
    }

    saveCurrentLangInLocalStorage() {
        localStorage.setItem("currentLang", this.translate.currentLang);
    }

    loadCurrentLangFromLocalStorage() {
        const lang = localStorage.getItem("currentLang");
        console.log(lang);
        if (lang) {
            this.translate.use(lang).subscribe(() => {
                this.saveCurrentLangInLocalStorage();
            });
        } else {
            this.useLanguage("en");
        }
    }

    active(lang: string) {
        return this.translate.currentLang === lang ? true : false;
    }
}
