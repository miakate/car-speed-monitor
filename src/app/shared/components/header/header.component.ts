import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageSwitcherComponent, TranslocoPipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
