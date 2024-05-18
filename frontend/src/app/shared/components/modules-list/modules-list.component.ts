import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ISchoolModule } from '../../models/school-module.interface';

@Component({
  selector: 'app-modules-list',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule
  ],
  templateUrl: './modules-list.component.html',
  styleUrl: './modules-list.component.css'
})
export class ModulesListComponent {
  @Input() modules: ISchoolModule[] = [];

  constructor() {}
}
