import { Component, Input } from '@angular/core';
import { ISchool } from '../../../shared/models/school.interface';
import { SchoolService } from '../../../shared/services/school.service';
import { MatTableModule } from '@angular/material/table';
import { ISchoolMember } from '../../../shared/models/school-member.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ISchoolRole } from '../../../shared/models/school-role.interface';
import { SchoolAdminService } from '../../../shared/services/school-admin.service';

@Component({
  selector: 'app-school-members-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './school-members-list.component.html',
  styleUrl: './school-members-list.component.css'
})
export class SchoolMembersListComponent {
  @Input({ required: true }) school_id!: string;
  school: ISchool | null = null;
  members: ISchoolMember[] = [];
  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];
  roles: ISchoolRole[] = [];

  constructor(private schoolService : SchoolService, private adminService: SchoolAdminService) {
    // this.getSchool(this.school_id);
    this.getMembers(this.school_id);
    this.getRoles(this.school_id);
  }

  async getSchool(school_id: string) {
    this.school = await this.schoolService.getSchoolDetail(school_id);
  }

  async getMembers(school_id: string) {
    this.members = await this.schoolService.getSchoolMembers(school_id);
  }

  async getRoles(school_id: string) {
    this.roles = await this.adminService.getSchoolRoles(school_id);
  }
}
