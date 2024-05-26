import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserManagementService } from '../shared/services/user-management.service';
import { IUser } from '../shared/models/user.interface';
import { ApiService } from '../shared/services/api.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatButton,
    MatInput,
    MatFormField,
    FormsModule,
    MatFormFieldModule,
    RouterModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  user: IUser = {
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
  };

  constructor(private userManagementService: UserManagementService, private apiService: ApiService, private router: Router) {
    // this.getCurrentlyLoggedInUser();
  }

  async login() {
    await this.userManagementService.login(this.user.username, this.user.password).then((response: any) => {
      if(response.success) {
        this.apiService.updateBearerToken(response.data.token);
        this.userManagementService.setUser(response.data);
        this.router.navigate(['/']);
        console.log(response.message);
      }
      else {
        console.log(response.message);
      }
    });
  }
}
