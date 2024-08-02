import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideAnimations } from "@angular/platform-browser/animations";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateLoaderService } from "./core/services/translate-loader.service";
import { routes } from "./app.routes";
import { provideHttpClient, HttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideAnimations(),
        importProvidersFrom(
            TranslateModule.forRoot({
                defaultLanguage: "en",
                loader: {
                    provide: TranslateLoader,
                    useClass: TranslateLoaderService,
                    deps: [HttpClient],
                },
            })
        ),
    ],
};
