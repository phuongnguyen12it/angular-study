import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { users } from './constants';
import { User } from './types';
import { delay, filter, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers(query?: string): Observable<User[]> {
    return of(users).pipe(
      delay(2000),
      map((data) =>
        data.filter((u) => {
          if (!query) return true;
          return (
            u.name.toLowerCase().startsWith(query.toLowerCase()) ||
            u.username.toLowerCase().startsWith(query.toLowerCase()) ||
            u.email.toLowerCase().startsWith(query.toLowerCase())
          );
        })
      )
    );
  }
}
