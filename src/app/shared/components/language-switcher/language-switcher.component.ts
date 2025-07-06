import { Component, inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
})
export class LanguageSwitcherComponent {
  transloco = inject(TranslocoService);
  langs = environment.availableLangs;
  activeLang = this.transloco.getActiveLang();

  setLang(lang: string) {
    this.transloco.setActiveLang(lang);
    this.activeLang = lang;
  }
}
