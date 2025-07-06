import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  provideTransloco,
  translocoConfig,
} from '@ngneat/transloco';
import { environment } from '../environments/environment';
import { TranslocoHttpLoader } from './transloco.loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideTransloco({
      config: translocoConfig({
        availableLangs: environment.availableLangs,
        defaultLang: environment.defaultLang,
        reRenderOnLangChange: true,
        prodMode: environment.production,
      }),
      loader: TranslocoHttpLoader,
    }),
  ],
};
