import { Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private apiService: ApiService) { }

  user?: IUser;

  async login(username: string, password: string): Promise<IUser> {
    const response = await this.apiService.axios().post('/login', {
      username,
      password
    });

    return response.data;
  }

  async signup(user: IUser): Promise<IUser> {
    const response = await this.apiService.axios().post('/signup', user);
    return response.data;
  }

  async setUser(user: IUser): Promise<void> {
    this.user = user;
  }

  async getUser(): Promise<IUser | undefined | null> {
    return this.user;
  }
}
