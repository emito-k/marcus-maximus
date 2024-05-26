import { Injectable } from '@angular/core';
import { ISchool } from '../models/school.interface';
import { ISchoolModule } from '../models/school-module.interface';
import { ISchoolMember } from '../models/school-member.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private apiService: ApiService) { }

  async getSchoolDetail(id: string) : Promise<ISchool> {
    return this.apiService.axios().get(`/school?id=${id}`).then((response: any) => {
      return response.data.data[0];
    });
  }

  async getSchools() : Promise<ISchool[]> {
    return this.apiService.axios().get('/school').then((response: any) => {
      return response.data.data;
    })
    .catch((error: any) => {
      console.error(error);
      return [];
    });
  }

  async getSchoolsBySearch(search: string) : Promise<ISchool[]> {
    return this.apiService.axios().get(`/school?description=${search}&school_name=${search}`).then((response: any) => {
      return response.data.data;
    })
    .catch((error: any) => {
      console.error(error);
      return [];
    });
  }

  async getSchoolModule(module_id: string) : Promise<ISchoolModule> {
    return this.apiService.axios().get(`/module?id=${module_id}`).then((response: any) => {
      return response.data.data[0];
    });
  }

  async getSchoolModules(school_id: string) : Promise<ISchoolModule[]> {
    return this.apiService.axios().get(`/module?school_id=${school_id}`).then((response: any) => {
      return response.data.data;
    });
  }

  async getSchoolMembers(school_id: string) : Promise<ISchoolMember[]> {
    return this.apiService.axios().get(`/member?school_id=${school_id}`).then((response: any) => {

      const members: ISchoolMember[] = response.data.data.map((member: any) => {
        return {
          member_id: member.id,
          member_name: member.User.username,
          member_role: member.Role.name,
          member_photo_url: 'https://via.placeholder.com/150',
          member_email: member.User.email
        };
      });

      return members;
    });
  }
}
