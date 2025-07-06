import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Driver } from '../../models/driver.model';
import { Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [NgClass, TranslocoPipe],
  templateUrl: './car-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarCardComponent {
  @Input({ required: true }) driver!: Driver;
  @Input({ required: true }) speed!: number;
  @Input({ required: true }) carIndex!: number;
  limit: number = 100;
}
