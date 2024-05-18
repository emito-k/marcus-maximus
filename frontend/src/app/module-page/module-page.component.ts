import { Component } from '@angular/core';
import { ISchoolModule } from '../shared/models/school-module.interface';
import { SchoolService } from '../shared/services/school.service';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ISchoolMember } from '../shared/models/school-member.interface';
import { MembersListComponent } from '../shared/components/members-list/members-list.component';

@Component({
  selector: 'app-module-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MembersListComponent
  ],
  templateUrl: './module-page.component.html',
  styleUrl: './module-page.component.css'
})
export class ModulePageComponent {
  module: ISchoolModule = {
    module_id: '',
    module_name: '',
    description: '',
    school_id: '',
    credits: 0
  };

  members: ISchoolMember[] = [];

  constructor(private schoolService: SchoolService, private route: ActivatedRoute) {
    const module_id = this.route.snapshot.paramMap.get('module_id') ?? '';
    const school_id = this.route.snapshot.paramMap.get('school_id') ?? '';

    // this.module = this.schoolService.getSchoolModule(module_id);
    this.getModule(module_id);
    this.getMembers(school_id);
  }

  async getModule(module_id: string) {
    this.module = await this.schoolService.getSchoolModule(module_id);
  }

  async getMembers(school_id: string) {
    this.members = await this.schoolService.getSchoolMembers(school_id);
  }
}
