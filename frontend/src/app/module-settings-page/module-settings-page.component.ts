import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormControl,  } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ISchoolModule } from '../shared/models/school-module.interface';
import { SchoolService } from '../shared/services/school.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-module-settings-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './module-settings-page.component.html',
  styleUrl: './module-settings-page.component.css'
})
export class ModuleSettingsPageComponent {
  module: ISchoolModule = {
    module_id: '',
    module_name: '',
    description: '',
    credits: 0,
    school_id: ''
  };

  constructor(private schoolService: SchoolService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.getModule(params['module_id']);
    });
  }

  async getModule(module_id: string) {
    this.module = await this.schoolService.getSchoolModule(module_id);
  }
}
