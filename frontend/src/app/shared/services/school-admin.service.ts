import { Injectable } from '@angular/core';
import { ISchoolRole } from '../models/school-role.interface';
import { ISystemPermission } from '../models/system-permission.interface';

@Injectable({
  providedIn: 'root'
})
export class SchoolAdminService {
  constructor() { }

  async getSchoolRoles(school_id: string): Promise<ISchoolRole[]> {
    // This is a mock implementation of the actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            role_id: 1,
            role_name: 'Admin',
            role_description: 'Admin role',
            school_id: school_id,
            permissions: [
              {
                permission_id: '1',
                permission_name: 'Create',
                permission_description: 'Create permission'
              },
              {
                permission_id: '2',
                permission_name: 'Read',
                permission_description: 'Read permission'
              },
              {
                permission_id: '3',
                permission_name: 'Update',
                permission_description: 'Update permission'
              },
              {
                permission_id: '4',
                permission_name: 'Delete',
                permission_description: 'Delete permission'
              }
            ]
          },
          {
            role_id: 2,
            role_name: 'Teacher',
            role_description: 'Teacher role',
            school_id: school_id,
            permissions: [
              {
                permission_id: '2',
                permission_name: 'Read',
                permission_description: 'Read permission'
              }
            ]

          },
          {
            role_id: 3,
            role_name: 'Student',
            role_description: 'Student role',
            school_id: school_id,
            permissions: [
              {
                permission_id: '2',
                permission_name: 'Read',
                permission_description: 'Read permission'
              }
            ]
          }
        ]);
      }, 1000);
    });
  }

  async updateSchoolRole(role: ISchoolRole): Promise<ISchoolRole> {
    // This is a mock implementation of the actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(role);
      }, 1000);
    });
  }

  async deleteSchoolRole(role_id: number): Promise<void> {
    // This is a mock implementation of the actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  async createSchoolRole(role: ISchoolRole): Promise<ISchoolRole> {
    // This is a mock implementation of the actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(role);
      }, 1000);
    });
  }

  async updateMemberRole(role: ISchoolRole): Promise<ISchoolRole> {
    // This is a mock implementation of the actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(role);
      }, 1000);
    });
  }

  async getSystemPermissions(): Promise<ISystemPermission[]> {
    // This is a mock implementation of the actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            permission_id: '1',
            permission_name: 'Create',
            permission_description: 'Create permission'
          },
          {
            permission_id: '2',
            permission_name: 'Read',
            permission_description: 'Read permission'
          },
          {
            permission_id: '3',
            permission_name: 'Update',
            permission_description: 'Update permission'
          },
          {
            permission_id: '4',
            permission_name: 'Delete',
            permission_description: 'Delete permission'
          }
        ]);
      }, 1000);
    });
  }
}
