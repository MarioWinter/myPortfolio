import { ComponentFixture, TestBed } from "@angular/core/testing";

import { projectComponent } from "./project.component";

describe("projectComponent", () => {
    let component: projectComponent;
    let fixture: ComponentFixture<projectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [projectComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(projectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
