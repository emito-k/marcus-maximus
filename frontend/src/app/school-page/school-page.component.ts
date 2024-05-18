import { Component } from '@angular/core';
import { SchoolModulesFeedComponent } from '../shared/components/school-modules-feed/school-modules-feed.component';
import { SchoolService } from '../shared/services/school.service';
import { ActivatedRoute } from '@angular/router';
import { ISchoolModule } from '../shared/models/school-module.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-school-page',
  standalone: true,
  imports: [
    SchoolModulesFeedComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './school-page.component.html',
  styleUrl: './school-page.component.css'
})
export class SchoolPageComponent {
  modules: ISchoolModule[] = [];
  loading: boolean = true;
  searching: boolean = false;

  constructor(private schoolService: SchoolService, private route: ActivatedRoute) {
    const school_id = this.route.snapshot.paramMap.get('id') ?? '';
    this.getModules(school_id);
  }

  async getModules(school_id: string): Promise<void> {
    this.loading = true;
    this.modules = await this.schoolService.getSchoolModules(school_id);
    this.loading = false;
  }

  async searchForModules(query: string): Promise<void> {
    this.searching = true;
    // this.modules = await this.schoolService.searchSchoolModules(query);
    this.searching = false;
  }

  async clearSearch(): Promise<void> {
    this.searching = false;
    const school_id = this.route.snapshot.paramMap.get('id') ?? '';
    this.getModules(school_id);
  }
}
