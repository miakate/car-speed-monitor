import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Driver } from '../interfaces/driver';

@Injectable({ providedIn: 'root' })
export class DriverService {
  constructor(private http: HttpClient) {}

  getDrivers(): Observable<Driver[]> {
    return this.http.get<any>('https://dummyjson.com/users?limit=2').pipe(
      map((res) =>
        res.users.map((u: any) => ({
          firstName: u.firstName,
          lastName: u.lastName,
          age: u.age,
        })),
      ),
    );
  }
}
