import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
template: `
    <h2>User ID: {{ userId }}</h2>
  `
})
export class UserComponent {
userId: string | null = '';

constructor(private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
