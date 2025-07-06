import { Component } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}
