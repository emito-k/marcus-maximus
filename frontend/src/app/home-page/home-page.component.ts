import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ViewSchoolsComponent } from '../shared/components/view-schools/view-schools.component';
import { SchoolService } from '../shared/services/school.service';
import { ISchool } from '../shared/models/school.interface';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    // MatButtonModule
    ViewSchoolsComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  schools: ISchool[] = [];
  loading: boolean = true;

  constructor(private schoolService: SchoolService) { }

  async ngOnInit() {
    this.schools = await this.schoolService.getSchools();
    this.loading = false;
  }

  async searchForSchools(searchTerm: string) {
    this.loading = true;
    this.schools = await this.schoolService.getSchoolsBySearch(searchTerm);
    this.loading = false;
  }
}
