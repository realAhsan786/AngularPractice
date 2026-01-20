import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  imports: [CommonModule,HeaderComponent,FooterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project_First';
  name = 'Ahsan';

  // *********************** Data Binding ***********************
  isDisabled = true;

  showMessage() {
    alert('Button clicked!');
    
  }
  
   username = '';
   age = null;   
   email = '';



   // *********************** Directives ***********************

   // ⭐ Structural Directives
     isLoggedIn = false;
     fruits = ['Apple', 'Banana', 'Mango'];
     role = 'admin';

    students = ['S1', 'S2', 'S3'];

    // Attribute Directives
  isActive = true;

  textColor = 'blue';
  fontSize = '20px';

    isActiveBtn = true;

   // *********************** Pipes ***********************

   testText = 'Angular';
   today = new Date();


   // *********************** Services ***********************

    users: string[] = [];

    constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}
