import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Driver } from '../../shared/models/driver.model';
import { environment } from '../../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class DriverService {
  http = inject(HttpClient);

  getDrivers(): Observable<Driver[]> {
    return this.http
      .get<{ users: Driver[] }>(environment.apiUrl)
      .pipe(map((response) => response.users));
  }
}
