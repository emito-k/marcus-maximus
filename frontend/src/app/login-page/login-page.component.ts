import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserManagementService } from '../shared/services/user-management.service';
import { IUser } from '../shared/models/user.interface';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatButton,
    MatInput,
    MatFormField,
    FormsModule,
    MatFormFieldModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  user: IUser = {
    id: '',
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    date_created: '',
    last_login: ''
  };
}
