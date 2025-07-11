import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslocoLoader } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get(`/assets/i18n/${lang}.json`);
  }
}
