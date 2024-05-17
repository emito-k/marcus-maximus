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
  @Input() school: ISchool = {
    school_name: 'School Name',
    school_id: 'School ID',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`,
    thumbnail_url: 'https://via.placeholder.com/750x600',
    profile_url: 'https://via.placeholder.com/509x500'
  };
}
