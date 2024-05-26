import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/user.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private userSubject: BehaviorSubject<IUser | null>;
  public user$: Observable<IUser | null>;

  constructor(private apiService: ApiService) {
    this.userSubject = new BehaviorSubject<IUser | null>(null);
    this.user$ = this.userSubject.asObservable();
  }

  async login(username: string, password: string): Promise<IUser> {
    const response = await this.apiService.axios().post('/login', {
      username,
      password
    });

    const user = response.data;
    this.setUser(user); // Update the user subject
    return user;
  }

  async signup(user: IUser): Promise<IUser> {
    const response = await this.apiService.axios().post('/signup', user);

    const newUser = response.data;
    this.setUser(newUser); // Update the user subject
    return newUser;
  }

  setUser(user: IUser): void {
    this.userSubject.next(user);
  }

  getUser(): IUser | null {
    return this.userSubject.value;
  }
}
