import { Component, Input } from '@angular/core';
// import { MatCardModule } from '@angular/material/card';
import { ViewSchoolCardComponent } from '../view-school-card/view-school-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ISchool } from '../../models/school.interface';
import { SchoolService } from '../../services/school.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-view-schools',
  standalone: true,
  imports: [
    ViewSchoolCardComponent,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './view-schools.component.html',
  styleUrl: './view-schools.component.css'
})
export class ViewSchoolsComponent {
  @Input() schools: ISchool[] = [];
  @Input() loading: boolean = false;
}
