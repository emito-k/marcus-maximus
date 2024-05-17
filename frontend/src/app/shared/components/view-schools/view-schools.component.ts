import { Component, Input } from '@angular/core';
// import { MatCardModule } from '@angular/material/card';
import { ViewSchoolCardComponent } from '../view-school-card/view-school-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ISchool } from '../../models/school.interface';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-view-schools',
  standalone: true,
  imports: [
    ViewSchoolCardComponent,
    FlexLayoutModule
  ],
  templateUrl: './view-schools.component.html',
  styleUrl: './view-schools.component.css'
})
export class ViewSchoolsComponent {
  @Input() schools: ISchool[] = [];

  constructor(private schoolService: SchoolService) { }

  async ngOnInit() {
    this.schools = await this.schoolService.getSchools();
  }
}
