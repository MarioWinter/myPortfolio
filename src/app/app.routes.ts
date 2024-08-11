import { Routes } from "@angular/router";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { LegalNoticeComponent } from "./legal-notice/legal-notice.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

export const routes: Routes = [
	{ path: "", component: LandingpageComponent },
	{ path: "imprint", component: LegalNoticeComponent },
	{ path: "privacy", component: PrivacyPolicyComponent },
];
