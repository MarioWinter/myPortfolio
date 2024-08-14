import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { ChangeDetectorRef } from "@angular/core";

/**
 * @interface ContactData
 * @description Interface representing the structure of contact form data.
 */
interface ContactData {
	name: string;
	email: string;
	message: string;
}

/**
 * @interface PostOptions
 * @description Interface representing the options for HTTP POST requests.
 */
interface PostOptions {
	headers: {
		"Content-Type": string;
		responseType: string;
	};
}

/**
 * @class ContactformComponent
 * @description Component for displaying and handling a contact form.
 * The component is standalone and imports FormsModule, TranslateModule, and CommonModule.
 */
@Component({
	selector: "app-contactform",
	standalone: true,
	imports: [FormsModule, TranslateModule, CommonModule],
	templateUrl: "./contactform.component.html",
	styleUrls: ["./contactform.component.scss"],
})
export class ContactformComponent {
	cdr = inject(ChangeDetectorRef);
	/**
	 * @property {TranslateService} translate
	 * @description Injected service for handling translations.
	 */
	translate = inject(TranslateService);

	/**
	 * @property {HttpClient} http
	 * @description Injected service for making HTTP requests.
	 */
	http = inject(HttpClient);

	/**
	 * @property {ContactData} contactData
	 * @description The data model for the contact form.
	 */
	contactData: ContactData = {
		name: "",
		email: "",
		message: "",
	};

	/**
	 * @property {boolean} isPrivacyAccepted
	 * @description Indicates whether the privacy policy has been accepted.
	 */
	isPrivacyAccepted = false;

	/**
	 * @property {boolean} messageSent
	 * @description Indicates whether the message has been successfully sent.
	 */
	messageSent = false;

	/**
	 * @property {object} post
	 * @description Configuration for the HTTP POST request.
	 */
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

	/**
	 * @method onSubmit
	 * @description Handles the submission of the contact form.
	 * Sends the form data to a specified endpoint if the form is valid and privacy is accepted.
	 * @param {NgForm} ngForm - The form object containing form controls and validation state.
	 * @returns {void}
	 */
	onSubmit(ngForm: NgForm): void {
		if (ngForm.submitted && ngForm.form.valid && this.isPrivacyAccepted) {
			this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options).subscribe({
				next: (response) => {
					ngForm.resetForm();
					this.messageSent = true;
					console.info("Form submission successful", response);
				},
				error: (error) => {
					console.error("Form submission error", error);
				},
				complete: () => {
					this.cdr.detectChanges();
					setTimeout(() => {
						this.messageSent = false;
						this.cdr.detectChanges();
					}, 3000);
					console.info("Send post complete");
				},
			});
		}
	}

	/**
	 * @method fixPrivacyPolicyHover
	 * @description Adjusts the padding of the privacy policy element based on the current language.
	 * @returns {object} An object containing CSS styles for padding.
	 */
	fixPrivacyPolicyHover(): object {
		return {
			padding: this.translate.currentLang === "en" ? "0rem 0.235rem" : "0rem 0.3495rem",
		};
	}
}
