import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = ['Ali', 'Ahmed', 'Sara'];

  getUsers() {
    return this.users;
  }
}
