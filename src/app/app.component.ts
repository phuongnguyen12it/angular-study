import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  currentDate = new Date();
  user = {
    name: 'phuong',
    age: 29,
  };

  interval$ = interval();

  addr = {
    address1: '123 Some St',
    address2: 'STE100',
    city: 'Acme',
    state: 'State',
    zip: '12345',
    country: 'US',
  };

  users = [
    {
      name: 'Tiep Phan',
      age: 30,
    },
    {
      name: 'Trung Vo',
      age: 28,
    },
    {
      name: 'Chau Tran',
      age: 29,
    },
    {
      name: 'Tuan Anh',
      age: 16,
    },
  ];

  addUser() {
    // cach push thong thuong nay se lam pipe ko nhan ra dc va ko update lai list user co pipe adult
    // this.users.push({ name: 'new user', age: 30 });
    // thay vi do ta dung cach nay de dam bao pipe nhan ra duoc su thay doi cua array chi dinh, tao array moi lay gia tri array cu va gan vao
    //cach1
    // this.users = [...this.users, { name: 'new user', age: 30 }];
    //cach 2 chang pure:false cua pipe phia model pipe, nhung no lai thanh lang phi nhu cu :)), dung nhu ko dung
    this.users.push({ name: 'new user', age: 30 });
  }

  formatAddress(addr) {
    console.log('lang phi', addr);
    return (
      addr.address1 +
      ' ' +
      addr.address2 +
      ' ' +
      addr.city +
      ', ' +
      addr.state +
      ' ' +
      addr.zip +
      ', ' +
      addr.country
    );
  }
}
