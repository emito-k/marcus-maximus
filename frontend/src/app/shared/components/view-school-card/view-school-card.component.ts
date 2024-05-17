import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ISchool } from '../../models/school.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-school-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './view-school-card.component.html',
  styleUrl: './view-school-card.component.css'
})
export class ViewSchoolCardComponent {
  @Input() school!: ISchool;
}
