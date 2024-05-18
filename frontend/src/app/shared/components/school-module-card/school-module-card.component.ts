import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ISchoolModule } from '../../models/school-module.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-school-module-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './school-module-card.component.html',
  styleUrl: './school-module-card.component.css'
})
export class SchoolModuleCardComponent {
  @Input() module!: ISchoolModule;
}
