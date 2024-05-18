import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { SchoolInformationComponent } from './forms/school-information/school-information.component';
import { SchoolMembersListComponent } from './forms/school-members-list/school-members-list.component';
import { SchoolRolesDashboardComponent } from './forms/school-roles-dashboard/school-roles-dashboard.component';
@Component({
  selector: 'app-school-settings-page',
  standalone: true,
  imports: [
    MatTabsModule,
    SchoolInformationComponent,
    SchoolMembersListComponent,
    SchoolRolesDashboardComponent
  ],
  templateUrl: './school-settings-page.component.html',
  styleUrl: './school-settings-page.component.css'
})
export class SchoolSettingsPageComponent {
  school_id : string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.school_id = params['school_id'];
    });
  }
}
