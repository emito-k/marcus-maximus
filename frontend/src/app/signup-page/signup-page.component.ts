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
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    MatButton,
    MatInput,
    MatFormField,
    FormsModule,
    MatFormFieldModule,
    RouterModule
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
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

  async signup() {
    await this.userManagementService.signup(this.user).then((response: any) => {
      if(response.success) {
        console.log(response.message);
        this.apiService.updateBearerToken(response.data.id);
        this.userManagementService.setUser(response.data);
        this.router.navigate(['/']);
      }
      else {
        console.log(response.message);
      }
    });
  }
}
