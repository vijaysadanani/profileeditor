import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profile Editor';
  header = 'User Information';
  user: User = {
    name: "Jakob",
    age: 29,
    favoriteColor: "Navy",
    isVerified: true
  }

  formUser: User = {
    name: "Jakob",
    age: 29,
    favoriteColor: "Navy",
    isVerified: true
  }

  displayEdit: boolean = false;
  editForm: NgForm | undefined;
  toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
    if(this.header === 'User Information'){
      this.header = 'Update User Information';
    } else {
      this.header = 'User Information';
    }
  }

  saveChanges(name: string, age: number, favoriteColor: string, isVerified:boolean): void {
    this.user.name = name;
    this.user.age = age;
    this.user.favoriteColor = favoriteColor;
    this.user.isVerified = isVerified;
  }
}