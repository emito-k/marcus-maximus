import { Component, Input } from '@angular/core';
import { ISchoolRole } from '../../../shared/models/school-role.interface';
import { SchoolAdminService } from '../../../shared/services/school-admin.service';
import { MatTableModule } from '@angular/material/table';
import { ISystemPermission } from '../../../shared/models/system-permission.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-school-roles-dashboard',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './school-roles-dashboard.component.html',
  styleUrl: './school-roles-dashboard.component.css'
})
export class SchoolRolesDashboardComponent {
  @Input({required: true}) school_id!: string;
  roles: ISchoolRole[] = [];
  permissions: ISystemPermission[] = [];
  displayedColumns: string[] = ['name', 'description', 'permissions', 'actions'];

  constructor(private adminService: SchoolAdminService) {
    this.getRoles(this.school_id);
    this.getPermissions();
  }

  async getRoles(school_id: string) {
    this.roles = await this.adminService.getSchoolRoles(school_id);
    console.log(this.roles);
  }

  async updateRole(role: ISchoolRole) {
    await this.adminService.updateSchoolRole(role);
  }

  async deleteRole(role_id: number) {
    await this.adminService.deleteSchoolRole(role_id);
  }

  async createRole(role: ISchoolRole) {
    await this.adminService.createSchoolRole(role);
  }

  async getPermissions() {
    this.permissions = await this.adminService.getSystemPermissions();
  }

  printValue(value: any) {
    console.log(value);
  }
}
