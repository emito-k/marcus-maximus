import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ISchool } from '../../../shared/models/school.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-school-information',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './school-information.component.html',
  styleUrl: './school-information.component.css'
})
export class SchoolInformationComponent {
  @Input({ required: true }) school_id!: string;
  school: ISchool | null = null;

  constructor() { }
}
