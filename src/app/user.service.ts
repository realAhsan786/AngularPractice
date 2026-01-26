import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

      console.log('HttpClient working');

   }

  users = ['Ali', 'Ahmed', 'Sara'];

  getUsers() {
    return this.users;
  }
 // API Call
  getAllUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
