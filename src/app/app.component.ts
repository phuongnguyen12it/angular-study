import { Component, VERSION } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { User } from './types';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  startWith,
  switchMap,
  tap,
  map,
  switchAll,
} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  queryControl = new FormControl('');
  users: User[] = [];
  loading = true;

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.queryControl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.loading = true;
        }),
        startWith(''),
        switchMap((query) =>
          this.userService.getUsers(query).pipe(
            tap(() => {
              this.loading = false;
            })
          )
        )
      )
      .subscribe((users) => {
        this.users = users;
      });
  }
}
