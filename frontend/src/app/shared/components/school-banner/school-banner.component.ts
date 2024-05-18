import { Component, Input } from '@angular/core';
import { ISchool } from '../../models/school.interface';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-school-banner',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './school-banner.component.html',
  styleUrl: './school-banner.component.css'
})
export class SchoolBannerComponent {
  @Input() school!: ISchool;

  constructor() {}
}
