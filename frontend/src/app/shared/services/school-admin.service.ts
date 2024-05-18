import { Injectable } from '@angular/core';
import { ISchoolRole } from '../models/school-role.interface';

@Injectable({
  providedIn: 'root'
})
export class SchoolAdminService {
  constructor() { }

  async getSchoolRoles(school_id: number): Promise<ISchoolRole[]> {
    // This is a mock implementation of the actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            role_id: 1,
            role_name: 'Admin',
            role_description: 'Admin role',
            school_id: school_id
          },
          {
            role_id: 2,
            role_name: 'Teacher',
            role_description: 'Teacher role',
            school_id: school_id
          },
          {
            role_id: 3,
            role_name: 'Student',
            role_description: 'Student role',
            school_id: school_id
          }
        ]);
      }, 1000);
    });
  }

}
