import { Component, inject, Input, OnInit } from '@angular/core';
import { Driver } from '../../../shared/models/driver.model';
import { DriverService } from '../../../core/services/driver.service';
import { interval, map, startWith } from 'rxjs';
import { CarCardComponent } from '../../../shared/components/car-card/car-card.component';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-car-monitor',
  standalone: true,
  imports: [CarCardComponent, TranslocoPipe],
  templateUrl: './car-monitor.component.html',
})
export class CarMonitorComponent implements OnInit {
  #driverSrv = inject(DriverService);
  @Input() carIndex!: number;
  drivers: Driver[] = [];
  speeds: number[] = [0, 0];

  ngOnInit(): void {
    this.#driverSrv.getDrivers().subscribe((drivers: Driver[]) => {
      this.drivers = drivers;
    });

    interval(1000)
      .pipe(
        startWith(0),
        map(() => [this.randomSpeed(), this.randomSpeed()]),
      )
      .subscribe((speeds: number[]) => (this.speeds = speeds));
  }

  private randomSpeed(): number {
    return Math.floor(Math.random() * 160);
  }
}
