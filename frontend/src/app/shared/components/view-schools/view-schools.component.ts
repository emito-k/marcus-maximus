import { Component } from '@angular/core';
// import { MatCardModule } from '@angular/material/card';
import { ViewSchoolCardComponent } from '../view-school-card/view-school-card.component';
@Component({
  selector: 'app-view-schools',
  standalone: true,
  imports: [
    ViewSchoolCardComponent
  ],
  templateUrl: './view-schools.component.html',
  styleUrl: './view-schools.component.css'
})
export class ViewSchoolsComponent {

}
