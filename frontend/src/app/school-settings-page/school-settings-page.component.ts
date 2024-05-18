import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { SchoolInformationComponent } from './forms/school-information/school-information.component';
@Component({
  selector: 'app-school-settings-page',
  standalone: true,
  imports: [
    MatTabsModule,
    SchoolInformationComponent
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
