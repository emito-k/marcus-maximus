import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  axiosInstance : any = axios.create({});

  constructor() {
    this.axiosInstance.defaults.baseURL = environment.apiUrl;
    if(localStorage.getItem('token')) {
      this.axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    }
    // this.axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  }

  updateBearerToken(token: string) {
    this.axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }

  axios() {
    return this.axiosInstance;
  }
}
