import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-view-school-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './view-school-card.component.html',
  styleUrl: './view-school-card.component.css'
})
export class ViewSchoolCardComponent {

}
