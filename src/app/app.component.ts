import { Component } from '@angular/core';
import { CarMonitorComponent } from './features/components/car-monitor/car-monitor.component';
import { LanguageSwitcherComponent } from './shared/components/language-switcher/language-switcher.component';
import { TranslocoPipe } from '@ngneat/transloco';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CarMonitorComponent,
    LanguageSwitcherComponent,
    TranslocoPipe,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
