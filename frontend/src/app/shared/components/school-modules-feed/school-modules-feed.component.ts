import { Component, Input } from '@angular/core';
import { ISchoolModule } from '../../models/school-module.interface';
import { SchoolModuleCardComponent } from '../school-module-card/school-module-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-school-modules-feed',
  standalone: true,
  imports: [
    SchoolModuleCardComponent,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  templateUrl: './school-modules-feed.component.html',
  styleUrl: './school-modules-feed.component.css'
})
export class SchoolModulesFeedComponent {
  @Input() loading: boolean = true;
  @Input() modules: ISchoolModule[] = [];
}
