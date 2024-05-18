import { Component, Input } from '@angular/core';
import { ISchoolModule } from '../../models/school-module.interface';
import { SchoolModuleCardComponent } from '../school-module-card/school-module-card.component';

@Component({
  selector: 'app-school-modules-feed',
  standalone: true,
  imports: [
    SchoolModuleCardComponent
  ],
  templateUrl: './school-modules-feed.component.html',
  styleUrl: './school-modules-feed.component.css'
})
export class SchoolModulesFeedComponent {
  @Input() modules: ISchoolModule[] = [];
}
