import { Component, Input } from '@angular/core';
import { ISchool } from '../../models/school.interface';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-school-banner',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './school-banner.component.html',
  styleUrl: './school-banner.component.css'
})
export class SchoolBannerComponent {
  @Input() school!: ISchool;

  constructor() {}
}
