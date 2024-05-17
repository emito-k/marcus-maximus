import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-view-school-page',
  standalone: true,
  imports: [
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatTabsModule
  ],
  templateUrl: './view-school-page.component.html',
  styleUrl: './view-school-page.component.css'
})
export class ViewSchoolPageComponent {

}
