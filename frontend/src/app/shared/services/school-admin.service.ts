import { Injectable } from '@angular/core';
import { ISchoolRole } from '../models/school-role.interface';
import { ISystemPermission } from '../models/system-permission.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolAdminService {
  constructor(private apiService: ApiService) { }

  async getSchoolRoles(school_id: string): Promise<ISchoolRole[]> {
    return this.apiService.axios().get(`/role?school_id=${school_id}`).then((response: any) => {
      return response.data.data.map((payload: any) => {
        return {
          role_id: payload.Role.id,
          role_name: payload.Role.name,
          role_description: payload.Role.description,
          role_permissions: []
        };
      });
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
