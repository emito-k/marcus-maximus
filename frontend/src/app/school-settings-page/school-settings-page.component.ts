import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-school-settings-page',
  standalone: true,
  imports: [
    MatTabsModule
  ],
  templateUrl: './school-settings-page.component.html',
  styleUrl: './school-settings-page.component.css'
})
export class SchoolSettingsPageComponent {

}
