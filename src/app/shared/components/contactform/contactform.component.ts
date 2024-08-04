import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

interface ContactData {
    name: string;
    email: string;
    message: string;
}

interface PostOptions {
    headers: {
        "Content-Type": string;
        responseType: string;
    };
}

@Component({
    selector: "app-contactform",
    standalone: true,
    imports: [FormsModule, TranslateModule],
    templateUrl: "./contactform.component.html",
    styleUrl: "./contactform.component.scss",
})
export class ContactformComponent {
    http = inject(HttpClient);

    contactData: ContactData = {
        name: "",
        email: "",
        message: "",
    };

    isPrivacyAccepted = false;

    post = {
        endPoint: "https://mariowinter.com/sendMail.php",
        body: (payload: ContactData) => JSON.stringify(payload),
        options: {
            headers: {
                "Content-Type": "text/plain",
                responseType: "text",
            },
        } as PostOptions,
    };

    onSubmit(ngForm: NgForm): void {
        if (ngForm.submitted && ngForm.form.valid && this.isPrivacyAccepted) {
            this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options).subscribe({
                next: (response) => {
                    ngForm.resetForm();
                    console.info("Form submission successful", response);
                },
                error: (error) => {
                    console.error("Form submission error", error);
                },
                complete: () => console.info("Send post complete"),
            });
        }
    }
}
