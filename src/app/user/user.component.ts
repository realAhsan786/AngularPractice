import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html'
})


export class UserComponent implements OnInit{
users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data as any[];
    });
  }

}
