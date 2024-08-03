import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";
import { BurgerMenuComponent } from "../burger-menu/burger-menu.component";
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from "@ngx-translate/core";

/**
 * @module HeaderComponent
 * @description Represents the header component of the application.
 * This component is responsible for navigation and language selection.
 */

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
    /** The TranslateService for translations */
    translate = inject(TranslateService);

    /** Indicates whether the menu is active (open) */
    isActive = false;

    /**
     * Initializes the component.
     * Loads the current language from local storage.
     */
    ngOnInit() {
        this.loadCurrentLangFromLocalStorage();
    }

    /**
     * Toggles the menu and updates the body's scroll status.
     */
    toggleMenu() {
        this.isActive = !this.isActive;
        this.toggleBodyScroll();
    }

    /**
     * Enables or disables the body scroll based on the menu status.
     * @private
     */
    private toggleBodyScroll() {
        document.body.style.overflow = this.isActive ? "hidden" : "";
    }

    /**
     * Determines whether the menu should be displayed.
     * @returns An object with CSS classes for menu visibility.
     */
    showMenu(): { [key: string]: boolean } {
        return {
            "d-none": !this.isActive,
        };
    }

    /**
     * Adjusts the position of the header based on the menu status.
     * @returns An object with CSS styles for the header position.
     */
    fixPosition(): { [key: string]: string } {
        return {
            "right.rem": this.isActive ? "1.1" : "0",
        };
    }

    /**
     * Changes the current language of the application.
     * @param language The language to use.
     */
    useLanguage(language: string): void {
        this.translate.use(language).subscribe(() => {
            this.saveCurrentLangInLocalStorage();
        });
    }

    /**
     * Saves the current language in local storage.
     */
    saveCurrentLangInLocalStorage() {
        localStorage.setItem("currentLang", this.translate.currentLang);
    }

    /**
     * Loads the current language from local storage and applies it.
     * If no language is stored, English is used as the default.
     */
    loadCurrentLangFromLocalStorage() {
        const lang = localStorage.getItem("currentLang");
        if (lang) {
            this.translate.use(lang).subscribe(() => {
                this.saveCurrentLangInLocalStorage();
            });
        } else {
            this.useLanguage("en");
        }
    }

    /**
     * Checks if the specified language is the currently active language.
     * @param lang The language to check.
     * @returns True if the specified language is active, otherwise false.
     */
    active(lang: string) {
        return this.translate.currentLang === lang;
    }
}
