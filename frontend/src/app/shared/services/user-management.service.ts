import { Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor() { }

  async getCurrentlyLoggedInUser(): Promise<IUser> {
    return {
      user_id: '1',
      username: 'admin',
      password: 'admin',
      email: '',
      first_name: 'Admin',
      last_name: 'Admin',
      date_created: '',
      last_login: ''
    };
  }
}
