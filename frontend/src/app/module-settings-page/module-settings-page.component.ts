import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormControl,  } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-module-settings-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './module-settings-page.component.html',
  styleUrl: './module-settings-page.component.css'
})
export class ModuleSettingsPageComponent {

}
