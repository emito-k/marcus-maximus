import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ISchoolMember } from '../../models/school-member.interface';

@Component({
  selector: 'app-members-list',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule
  ],
  templateUrl: './members-list.component.html',
  styleUrl: './members-list.component.css'
})
export class MembersListComponent {
  @Input() members: ISchoolMember[] = [];

  constructor() {}
}
