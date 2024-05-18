import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SchoolService } from '../shared/services/school.service';
import { ActivatedRoute } from '@angular/router';
import { ISchool } from '../shared/models/school.interface';
import { ISchoolModule } from '../shared/models/school-module.interface';
import { ISchoolMember } from '../shared/models/school-member.interface';

@Component({
  selector: 'app-view-school-page',
  standalone: true,
  imports: [
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatTabsModule
  ],
  templateUrl: './view-school-page.component.html',
  styleUrl: './view-school-page.component.css'
})
export class ViewSchoolPageComponent {
  school: ISchool | null = null;
  modules: ISchoolModule[] = [];
  members: ISchoolMember[] = [];

  constructor(private schoolService: SchoolService, private router: ActivatedRoute) {
    const school_id = this.router.snapshot.paramMap.get('id') ?? '';
    this.getSchool(school_id);
    this.getSchoolModules(school_id);
    this.getSchoolMembers(school_id);
  }

  async getSchool(school_id: string) {
    this.school = await this.schoolService.getSchoolDetail(school_id);
  }

  async getSchoolModules(school_id: string) {
    this.modules = await this.schoolService.getSchoolModules(school_id);
  }

  async getSchoolMembers(school_id: string) {
    this.members = await this.schoolService.getSchoolMembers(school_id);
  }
}
